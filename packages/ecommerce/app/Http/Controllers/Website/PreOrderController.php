<?php

namespace Jed\Ecommerce\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Core\Http\Traits\Website\NotificationTrait;
use Jed\Ecommerce\App\PreOrder;
use Jed\Ecommerce\Notifications\PreOrderNotification;

class PreOrderController extends Controller
{
    use NotificationTrait;

    public function applyPreOrder(Request $request)
    {
        $data = $request->except('_token');
        $data['status'] = 0;
        $data['user_id'] = auth('web')->user()->id;
        $pre_order = PreOrder::create($data);
        $this->notifyAdmins(new PreOrderNotification($pre_order));
        return redirect()->back()->with('message', 'Pre Order Applied Successfully');
    }
}
