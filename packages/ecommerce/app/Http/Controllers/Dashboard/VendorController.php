<?php

namespace Jed\Ecommerce\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Ecommerce\App\Product;
use Jed\Ecommerce\App\ProductCategory;
use Jed\Ecommerce\App\Vendor;
use Jed\Ecommerce\Notifications\VendorCreatedNotification;

class VendorController extends Controller
{
    use ControllerTrait;

    public function index()
    {
        $vendors = Vendor::latest()->get();
        return response()->json(['success' => true, 'data' => $vendors]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|unique:vendors'
        ]);
        $password = mb_substr(md5(rand(10000, 1000000)), 0, 10);
        // $password = 'password123';
        $vendor = Vendor::create([
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'address' => $request->address,
            'inventory_location' => $request->inventory_location,
            'email' => $request->email,
            'contact' => $request->contact,
            'full_name' => $request->full_name,
            'contact_person_phone' => $request->contact_person_phone,
            'contact_person_address' => $request->contact_person_address,
            'pan_no' => $request->pan_no,
            'password' => bcrypt($password),
        ]);

        $vendor->notify(new VendorCreatedNotification($vendor, $password));

        return response()->json(['success' => true, 'message' => 'Vendor successfully added.']);
    }

    public function show($id)
    {
        $vendor = Vendor::findOrFail($id);
        return response()->json(['success' => true, 'data' => $vendor]);
    }

    public function update($id, Request $request)
    {

        $this->validate($request, [
            'email' => 'required|unique:vendors,email,' . $id
        ]);

        $vendor = Vendor::findOrFail($id);
        $status = $vendor->status;
        if ($status != Vendor::STATUS_REQUESTED) {
            $status = ($this->isTrue($request->status)) ? 1 : 0;
        }

        $vendor->update([
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'address' => $request->address,
            'inventory_location' => $request->inventory_location,
            'email' => $request->email,
            'contact' => $request->contact,
            'full_name' => $request->full_name,
            'contact_person_phone' => $request->contact_person_phone,
            'contact_person_address' => $request->contact_person_address,
            'pan_no' => $request->pan_no,
            'status' => $status
        ]);
        return response()->json(['success' => true, 'message' => 'Vendor detail successfully updated']);
    }

    public function destroy($id)
    {
        $products_count = Product::where('vendor_id', $id)->count();
        if ($products_count > 0) {
            return response()->json(['success' => false, 'message' => 'Vendor has products. Please delete products first.']);
        }

        $vendor = Vendor::findOrFail($id);
        $vendor->delete();
        return response()->json(['success' => true, 'message' => 'Vendor successfully deleted']);
    }

    public function getVendorsDropdown()
    {
        $vendors = Vendor::select(['id', 'name'])->get();
        return response()->json(['success' => true, 'data' => $vendors]);
    }
}
