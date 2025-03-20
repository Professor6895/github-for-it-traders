<?php

namespace Jed\Ecommerce\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Jed\Ecommerce\App\Vendor;

class VendorRequestPlacedNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Vendor $vendor)
    {
        $this->vendor = $vendor;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
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
            'title' => 'New Vendor Request Placed',
            'msg' => "New vendor request placed by " . $this->vendor->name,
            'icon' => 'shop',
            'link' => "/admin/vendor/{$this->vendor->id}",
        ];
    }
}
