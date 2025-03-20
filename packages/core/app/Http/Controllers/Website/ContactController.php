<?php

namespace Jed\Core\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Jed\Core\App\Admin;
use Jed\Core\App\Contact;
use Illuminate\Support\Facades\Mail;
use Jed\Core\Http\Traits\Website\MetaTrait;
use Jed\Core\Mail\ContactMail;
use Jed\Core\Notifications\ContactNotification;

class ContactController extends Controller
{
    use MetaTrait;

    public function getContactForm()
    {
        $this->defaultMeta("Contact Us");
        return view(resolveView('core::website.contact-us'));
    }


    public function postContact(Request $request)
    {
        $this->validate($request, [
        'name' => 'required|max:50',
        'email' => 'required|max:60',
        'contact' => 'required|max:20',
        'subject' => 'required|max:200',
        'message' => 'required'
        ]);

        $contact = Contact::create([
        'name' => $request->name,
        'email' => $request->email,
        'contact' => $request->contact,
        'subject' => $request->subject,
        'message' => $request->message
        ]);
        $admins = Admin::get();
        foreach ($admins as $admin) {
            $admin->notify(new ContactNotification($contact));
        }

        // $notifiable = settings()['email_settings']['email_setting']['contact_email'];
        // if ($notifiable) {
        //     Mail::to(explode(',', $notifiable))->send(new ContactMail($contact));
        // }

        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'message' => 'Inquiry submitted. We will get back to you as soon as possible.']);
        }
        return redirect()->back()->with(['success' => true, 'message' => 'Inquiry submitted. We will get back to you as soon as possible.']);
    }
}
