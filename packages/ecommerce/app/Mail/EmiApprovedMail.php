<?php

namespace Jed\Ecommerce\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use Jed\Ecommerce\Cart\EmiRequest;

class EmiApprovedMail extends Mailable
{
    use Queueable;
    use SerializesModels;

    protected $reply;
 /**
  * Create a new message instance.
  *
  * @return void
  */
    public function __construct(EmiRequest $emi_request)
    {
        $this->emi_request = $emi_request;
    }

 /**
  * Build the message.
  *
  * @return $this
  */
    public function build()
    {
        $prepared_mail = $this->markdown(resolveView('ecommerce::emails.emi-approved'))->with(['emi_request' => $this->emi_request]);
        $pdf_path = "public/uploads/emi-requests/{$this->emi_request->id}/emi-user-quotation.pdf";
        $check_existance = Storage::disk('local')->exists($pdf_path);
        if ($check_existance) {
            $prepared_mail = $prepared_mail->attach(Storage::disk('local')->path($pdf_path));
        }

        return $prepared_mail;
    }
}
