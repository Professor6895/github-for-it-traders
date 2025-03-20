<?php

namespace Jed\Ecommerce\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Core\Http\Traits\Website\MetaTrait;
use Jed\Ecommerce\App\Vendor;
use Illuminate\Support\Str;
use Jed\Core\Http\Traits\Website\NotificationTrait;
use Jed\Ecommerce\Notifications\VendorRequestPlacedNotification;

class VendorController extends Controller
{
    use NotificationTrait;

    public function vendorRequestForm()
    {
        return view(resolveView('ecommerce::website.vendor.request-form'));
    }

    public function postRequestForm(Request $request)
    {
        $vendor = Vendor::create([
          'name' => $request->name,
          'slug' => Str::slug($request->name),
          'address' => $request->address,
          'full_name' => $request->full_name,
          'email' => $request->email,
          'contact' => $request->contact_person_phone,
          'contact_person_phone' => $request->contact_person_phone,
          'contact_person_address' => $request->contact_person_address,
          'pan_no' => $request->pan_no
        ]);


        $this->notifyAdmins(new VendorRequestPlacedNotification($vendor));
        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'message' => 'Request submitted. We will get back to you soon.']);
        }
        return redirect()->back()->with(['success' => true, 'message' => 'Request submitted. We will get back to you soon.']);
    }
}
