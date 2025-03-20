<?php

namespace Jed\Ecommerce\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Jed\Ecommerce\Cart\EmiRequest;

class EmiRequestPlacedNotification extends Notification
{
    use Queueable;

    protected $notification_channel;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(EmiRequest $emiRequest)
    {
        $this->emiRequest = $emiRequest;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail', 'database'];
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
        ->subject("Emi Request Placed")
        ->markdown(resolveView('ecommerce::emails.emi-request-placed'), ['emi_request' => $this->emiRequest]);
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
            'title' => 'New EMI Request',
            'msg' => "New EMI request from " . $this->emiRequest->user->name,
            'icon' => 'local_atm',
            'link' => "/admin/emi-request/{$this->emiRequest->id}",
        ];
    }
}
