<?php

namespace Jed\Core\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Jed\Core\App\Contact;
use Jed\Core\Mail\ContactReplyMail;

class ContactsController extends Controller
{
    public function getContacts()
    {
        $contacts = Contact::latest()->paginate(10);
        return response()->json(['success' => true, 'data' => $contacts]);
    }

    public function getContactDetail($contact_id)
    {
        $contact = Contact::find($contact_id);
        return response()->json(['success' => true, 'data' => $contact]);
    }

    public function sendReply($contact_id, Request $request)
    {
        $this->validate($request, [
        'reply' => 'required'
        ]);

        if ($contact_id) {
            $contact = Contact::find($contact_id);
            $contact->update([
            'reply' => $request->reply,
            'replied_at' => Carbon::now()
            ]);
            Mail::to($contact->email)->send(new ContactReplyMail($request->reply));
        }
    }
}
