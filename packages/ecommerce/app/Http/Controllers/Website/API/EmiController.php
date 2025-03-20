<?php

namespace Jed\Ecommerce\Http\Controllers\Website\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Core\Http\Traits\Website\NotificationTrait;
use Jed\Ecommerce\App\EmiBank;
use Jed\Ecommerce\Cart\EmiRequest;
use Jed\Ecommerce\Notifications\EmiRequestPlacedNotification;

class EmiController extends Controller
{
    use ControllerTrait;
    use NotificationTrait;

    public function getBanksList()
    {
        $banks = EmiBank::all();
        return response()->json(['success' => true, 'data' => $banks]);
    }

    public function postEmiApplication(Request $request)
    {
        $emi_application = EmiRequest::create([
            "credit_card" => isTrue($request->credit_card) ? 1 : 0,
            "emi_mode" => $request->emi_mode,
            "down_payment" => $request->down_payment,
            "finance_amount" => $request->finance_amount,
            "emi_per_month" => $request->emi_per_month,
            "name" => $request->name,
            "email" => $request->email,
            "contact_number" => $request->contact_number,
            "address" => $request->address,
            "gender" => $request->gender,
            "dob_ad" => $request->dob_ad,
            "dob_bs" => $request->dob_bs,
            "bank" => $request->bank,
            "product_attributes" =>  json_decode($request->product_attributes),
            "product_id" => $request->product_id,
            "user_id" => auth('web')->user()->id,
            "product_price" => $request->product_price,
            "length_of_employment" => $request->length_of_employment,
            "monthly_income" => $request->monthly_income,
            "no_of_dependents" => $request->no_of_dependents,
            "occupation" => $request->occupation,
            "residental_status" => $request->residental_status,
            "vehicle" => $request->vehicle,
            'card_holder_name' => $request->card_holder_name,
            'card_number' => $request->card_number,
            'card_expiry_date' => $request->card_expiry_date,
        ]);

        if ($request->file('salary_certificate')) {
            $asset_path = "public/uploads/emi-requests/{$emi_application->id}";
            $response = $this->uploadFile($request->file('salary_certificate'), $asset_path);
            $emi_application->update([
                'salary_certificate' => $response['file_name']
            ]);
        }

        if ($request->file('citizenship')) {
            $asset_path = "public/uploads/emi-requests/{$emi_application->id}";
            $response = $this->uploadFile($request->file('citizenship'), $asset_path);
            $emi_application->update([
                'citizenship' => $response['file_name']
            ]);
        }

        if ($request->file('photo')) {
            $asset_path = "public/uploads/emi-requests/{$emi_application->id}";
            $response = $this->uploadFile($request->file('photo'), $asset_path);
            $emi_application->update([
                'photo' => $response['file_name']
            ]);
        }
        if ($request->file('photo')) {
            $asset_path = "public/uploads/emi-requests/{$emi_application->id}";
            $response = $this->uploadFile($request->file('photo'), $asset_path);
            $emi_application->update([
                'photo' => $response['file_name']
            ]);
        }

        if ($request->file('bank_statement')) {
            $asset_path = "public/uploads/emi-requests/{$emi_application->id}";
            $response = $this->uploadFile($request->file('bank_statement'), $asset_path);
            $emi_application->update([
                'bank_statement' => $response['file_name']
            ]);
        }

        try {
            $this->notifyAdmins(new EmiRequestPlacedNotification($emi_application));
        } catch (\Exception $e) {
        }        session()->flash('message', 'EMI application submitted.');
        return response()->json(['success' => true, 'message' => $emi_application]);
    }
}
