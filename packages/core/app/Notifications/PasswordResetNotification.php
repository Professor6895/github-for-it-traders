<?php

namespace Jed\Core\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PasswordResetNotification extends Notification
{
    use Queueable;

    public $token;

 /**
  * Create a new notification instance.
  *
  * @return void
  */
    public function __construct($token)
    {
        $this->token = $token;
    }

 /**
  * Get the notification's delivery channels.
  *
  * @param  mixed  $notifiable
  * @return array
  */
    public function via($notifiable)
    {
        return ['mail'];
    }

 /**
  * Get the mail representation of the notification.
  *
  * @param  mixed  $notifiable
  * @return \Illuminate\Notifications\Messages\MailMessage
  */
    public function toMail($notifiable)
    {
        $url = url(route('password.reset', [
        'token' => $this->token,
        'email' => $notifiable->getEmailForPasswordReset(),
        ], false));
        return (new MailMessage)
        ->subject("Reset your password")
        ->markdown(resolveView('core::emails.password_reset'), ['url' => $url]);
    }
}
