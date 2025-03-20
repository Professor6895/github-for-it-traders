<?php

namespace Jed\Ecommerce\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Ecommerce\App\Helpers\EmiHelper;
use Jed\Ecommerce\Cart\EmiRequest;
use Illuminate\Support\Facades\Mail;
use Jed\Ecommerce\Mail\EmiApprovedMail;

class EmiController extends Controller
{
    use ControllerTrait;

    public function getEmiRequests(Request $request)
    {
        $emis = EmiRequest::with('product:id,name,slug', 'bankDetail:id,name')->latest();
        if ($request->has('search') && !$this->isNull($request->search)) {
            $emis = $emis->search($request->search);
        }

        $emis  = $emis->paginate(env('ADMIN_PER_PAGE_PAGINATION', 10));
        return response()->json(['success' => true, 'data' => $emis]);
    }

    public function getEmiRequestDetail($id)
    {
        $emi = EmiRequest::with('product:id,name,slug', 'bankDetail:id,name')->find($id);
        if ($emi) {
            return response()->json(['success' => true, 'data' => $emi]);
        }
        return response()->json(['success' => false, 'message' => 'Emi Request not found']);
    }

    public function approveEmiRequest($request_id)
    {
        $emiRequest = EmiRequest::with('bankDetail:id,name', 'product')->find($request_id);
        $emiHelper = new EmiHelper();
        $emiHelper->generateEmiPdf($emiRequest);

        $emiRequest->update([
            'status' => EmiRequest::STATUS_APPROVED,
        ]);

        try {
            Mail::to($emiRequest->email)->send(new EmiApprovedMail($emiRequest));
        } catch (Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()]);
        }
        return response()->json(['success' => true, 'message' => 'Emi requests successfully approved.']);
    }

    public function processEmiRequest($request_id)
    {
        $emiRequest = EmiRequest::find($request_id);
        $emiRequest->update([
            'status' => EmiRequest::STATUS_PROCESSING,
        ]);
        return response()->json(['success' => true, 'message' => 'Emi requests successfully set to processing.']);
    }


    public function completeEmiRequest($request_id)
    {
        $emiRequest = EmiRequest::find($request_id);
        $emiRequest->update([
            'status' => EmiRequest::STATUS_FINISHED,
        ]);
        return response()->json(['success' => true, 'message' => 'Emi requests successfully set to completed.']);
    }


    public function declineEmiRequest($request_id)
    {
        $emiRequest = EmiRequest::find($request_id);
        $emiRequest->update([
            'status' => EmiRequest::STATUS_CANCELLED,
        ]);
        return response()->json(['success' => true, 'message' => 'Emi requests successfully set to completed.']);
    }

    public function deleteEmiDetail($id) {
        $emi = EmiRequest::find($id);
        $emi->delete();
        return response()->json(['success' => true, 'message' => 'Emi request successfully deleted.']);
    }
}
