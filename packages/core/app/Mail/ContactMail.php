<?php

namespace Jed\Core\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;
    protected $contact;
  /**
   * Create a new message instance.
   *
   * @return void
   */
    public function __construct($contact)
    {
        $this->contact = $contact;
    }

  /**
   * Build the message.
   *
   * @return $this
   */
    public function build()
    {
        return $this->markdown(resolveView('core::emails.contact_created'))->subject('New Contact Inquiry')->with(['contact' => $this->contact]);
    }
}
