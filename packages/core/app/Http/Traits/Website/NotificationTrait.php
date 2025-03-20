<?php

namespace Jed\Core\Http\Traits\Website;

use Jed\Core\App\Admin;

trait NotificationTrait
{
    public function notifyAdmins($notification)
    {
        $admin = Admin::where('id', 1)->first();
        $admin->notify($notification);
    }
}
