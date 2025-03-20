<?php

namespace Jed\Ecommerce\Http\Controllers\Vendor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Ecommerce\App\Vendor;

class ProfileController extends Controller
{
    use ControllerTrait;

    protected $vendor;

    public function __construct()
    {
        $this->vendor = auth('apiVendor')->user();
    }

    public function updateProfile(Request $request)
    {
        $vendor = Vendor::find($this->vendor->id);
        $vendor->update([
        'name' => $request->name,
        'address' => $request->address,
        'inventory_location' => $request->inventory_location,
        'email' => $request->email,
        'contact' => $request->contact,
        'full_name' => $request->full_name,
        'contact_person_phone' => $request->contact_person_phone,
        'contact_person_address' => $request->contact_person_address,
        'pan_no' => $request->pan_no ? $request->pan_no : $vendor->pan_no,
        ]);

        if ($request->file('avatar')) {
            $asset_path = "public/uploads/avatars/vendors/{$vendor->id}";
            $response = $this->uploadImage($request->file('avatar'), $asset_path);
            $vendor->update([
            'avatar' => $response['file_name']
            ]);
        }

        $vendor->refresh();

        return response()->json(['success' => true, 'userInfo' => $vendor, 'message' => 'Profile successfully updated']);
    }

    public function updateSecurity(Request $request)
    {
        $this->validate($request, [
        'current_password' => 'required',
        'new_password' => [
          'required',
          'string',
          'min:8',             // must be at least 10 characters in length
          'regex:/[0-9]/',      // must contain at least one digit
          'regex:/[@$!%*#?&]/', // must contain a special character
        ],
        'confirm_password' => 'required|same:new_password'
        ], [
        'new_password.regex' => 'Password must contain at least one digit and one special character'
        ]);


        if (!Hash::check($request->current_password, $this->vendor->password)) {
            $error = \Illuminate\Validation\ValidationException::withMessages([
            'current_password' => ['Invalid current password.'],
            ]);
            throw $error;
        } else {
            $this->vendor->update([
            'password' => bcrypt($request->new_password),
            'password_changed' => 1
            ]);
        }

        return response()->json(['success' => true, 'message' => 'Security detail successfully updated.']);
    }

    public function updateBusinessInformation(Request $request)
    {
        $this->validate($request, [
        'legal_business_name' => 'required',
        'pan_no' => 'required',
        // 'pan_document' => 'required|mimes:jpg,bmp,png|max:2048'
        ]);

        $vendor = Vendor::find($this->vendor->id);
        $vendor->update([
        'legal_business_name' => $request->legal_business_name,
        'pan_no' => $request->pan_no,
        ]);

        if ($request->file('pan_document')) {
            $asset_path = "public/uploads/vendors/{$vendor->id}";
            $response = $this->uploadImage($request->file('pan_document'), $asset_path, false);
            if ($vendor->pan_document) {
                $this->deleteFile($vendor->pan_document, $asset_path);
            }
            $vendor->update([
            'pan_document' => $response['file_name']
            ]);
        }
        $this->checkIfAllFieldsAreFilled($vendor);
        return response()->json(['success' => true, 'message' => 'Business information successfully updated.', 'userInfo' => $vendor]);
    }

    public function updateBankInformation(Request $request)
    {
        $this->validate($request, [
        'bank_account_name' => 'required',
        'bank_account_number' => 'required',
        'bank_name' => 'required',
        'bank_branch' => 'required',
        // 'bank_cheque_copy' => 'required|mimes:jpg,bmp,png|max:2048'
        ]);

        $vendor = Vendor::find($this->vendor->id);
        $vendor->update([
        'bank_account_name' => $request->bank_account_name,
        'bank_account_number' => $request->bank_account_number,
        'bank_name' => $request->bank_name,
        'bank_branch' => $request->bank_branch,
        ]);

        if ($request->file('bank_cheque_copy')) {
            $asset_path = "public/uploads/vendors/{$vendor->id}";
            $response = $this->uploadImage($request->file('bank_cheque_copy'), $asset_path, false);
            if ($vendor->bank_cheque_copy) {
                $this->deleteFile($vendor->bank_cheque_copy, $asset_path);
            }
            $vendor->update([
            'bank_cheque_copy' => $response['file_name']
            ]);
        }

        $this->checkIfAllFieldsAreFilled($vendor);
        return response()->json(['success' => true, 'message' => 'Bank information successfully updated.', 'userInfo' => $vendor]);
    }

    public function getVendorProfile()
    {
        $vendor = Vendor::find($this->vendor->id);
        return response()->json(['success' => true, 'userInfo' => $vendor]);
    }

    public function checkIfAllFieldsAreFilled($vendor)
    {
        if (
            $vendor->name &&
            $vendor->slug &&
            $vendor->email &&
            $vendor->inventory_location &&
            $vendor->address &&
            $vendor->contact &&
            $vendor->full_name &&
            $vendor->contact_person_phone &&
            $vendor->contact_person_address &&
            $vendor->pan_no &&
            $vendor->legal_business_name &&
            $vendor->pan_document &&
            $vendor->bank_account_name &&
            $vendor->bank_account_number &&
            $vendor->bank_name &&
            $vendor->bank_branch &&
            $vendor->bank_cheque_copy
        ) {
            $vendor->update([
            'data_updated' => 1
            ]);
        }
    }
}
