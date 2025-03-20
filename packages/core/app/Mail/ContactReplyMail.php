<?php

namespace Jed\Core\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactReplyMail extends Mailable
{
    use Queueable;
    use SerializesModels;

    protected $reply;
 /**
  * Create a new message instance.
  *
  * @return void
  */
    public function __construct($reply)
    {
        $this->reply = $reply;
    }

 /**
  * Build the message.
  *
  * @return $this
  */
    public function build()
    {
        return $this->markdown(resolveView('core::emails.contact_reply'))->with(['reply' => $this->reply]);
    }
}
