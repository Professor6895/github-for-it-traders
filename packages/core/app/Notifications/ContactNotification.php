<?php

namespace Jed\Core\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Jed\Core\App\Contact;

class ContactNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Contact $contact)
    {
        $this->contact = $contact;
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
        return (new MailMessage)
            ->line('The introduction to the notification.')
            ->action('Notification Action', url('/'))
            ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        // index: 0,
        // title: "New Message",
        // msg: "Are your going to meet me tonight?",
        // icon: "MessageSquareIcon",
        // time: this.randomDate({ sec: 10 }),
        // category: "primary",
        return [
            'title' => 'Contact Inquiry',
            'msg' => "New contact inquiry from " . $this->contact->name,
            'icon' => 'message',
            'link' => "/admin/contact-inquiry/{$this->contact->id}"
        ];
    }
}
