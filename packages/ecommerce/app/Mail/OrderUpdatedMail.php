<?php

namespace Jed\Ecommerce\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Jed\Ecommerce\App\Helpers\OrderHelper;
use Jed\Ecommerce\Cart\Order;

class OrderUpdatedMail extends Mailable
{
    use Queueable;
    use SerializesModels;

    protected $reply;
 /**
  * Create a new message instance.
  *
  * @return void
  */
    public function __construct(Order $order)
    {
        $this->order = $order;
    }

 /**
  * Build the message.
  *
  * @return $this
  */
    public function build()
    {
        $order_helper = new OrderHelper();
        $message = $order_helper->generateOrderMessageForUser($this->order);
        $prepared_mail = $this->markdown(resolveView('ecommerce::emails.order-updated'))->with(['order' => $this->order, 'order_message' => $message]);
        return $prepared_mail;
    }
}
