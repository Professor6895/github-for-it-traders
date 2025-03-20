<?php

namespace Jed\Ecommerce\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Ecommerce\App\EmiBank;

class EmiBankController extends Controller
{
    use ControllerTrait;

    public function index()
    {
        $banks = EmiBank::latest()->get();
        return response()->json(['success' => true, 'data' => $banks]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|max:255',
            'bank_code' => 'required|max:255',
            'email' => 'required|email|max:255',
            'emi_form_file' => 'required',
        ]);
        $bank = EmiBank::create([
          'name' => $request->name,
          'bank_code' => $request->bank_code,
          'email' => $request->email,
          'contact_number' => $request->contact_number,
          'finance_amount_percentage' => json_decode($request->finance_amount_percentage),
          ]);
        if ($request->file('emi_form_file')) {
            $asset_path = "public/uploads/emi-forms/{$bank->id}";
            $response = $this->uploadFile($request->file('emi_form_file'), $asset_path);
            $bank->update([
            'emi_form_file' => $response['file_name']
            ]);
        }

        return response()->json(['success' => true, 'message' => 'Bank successfully added.']);
    }


    public function update($bank_id, Request $request)
    {
        $this->validate($request, [
        'name' => 'required|max:255',
        'bank_code' => 'required|max:255',
        'email' => 'required|email|max:255',
        ]);
        $bank = EmiBank::find($bank_id);
        $bank->update([
        'name' => $request->name,
        'bank_code' => $request->bank_code,
        'email' => $request->email,
        'contact_number' => $request->contact_number,
        'finance_amount_percentage' => json_decode($request->finance_amount_percentage),
        ]);
        if ($request->file('emi_form_file')) {
            $asset_path = "public/uploads/emi-forms/{$bank->id}";
            $response = $this->uploadFile($request->file('emi_form_file'), $asset_path);
            $bank->update([
            'emi_form_file' => $response['file_name']
            ]);
        }
        return response()->json(['success' => true, 'message' => 'Bank successfully updated.']);
    }

    public function destroy($bank_id)
    {
        $bank = EmiBank::find($bank_id);
        $bank->delete();
        return response()->json(['success' => true, 'message' => 'Bank successfully deleted.']);
    }
}
