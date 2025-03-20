<?php

namespace Jed\Ecommerce\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Jed\Ecommerce\Cart\Order;

class OrderPlacedNotification extends Notification
{
    use Queueable;

    protected $notification_channel;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Order $order, $notification_channel = 'database')
    {
        $this->order = $order;
        $this->notification_channel = $notification_channel;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return [$this->notification_channel];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage())
        ->subject("Order Placed")
        ->markdown(resolveView('ecommerce::emails.order-placed'), ['order' => $this->order]);
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'title' => 'Order Placed',
            'msg' => "New order from " . $this->order->user->name,
            'icon' => 'shopping_cart',
            'link' => "/admin/order/{$this->order->id}"
        ];
    }
}
