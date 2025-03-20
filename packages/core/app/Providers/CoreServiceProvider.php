<?php

namespace Jed\Core\Providers;

use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\ServiceProvider;
use Jed\Core\Console\Commands\AddressImport;
use Jed\Core\Console\Commands\GenerateSitemap;
use Jed\Core\Console\Commands\MigrateAll;
use Jed\Core\Console\Commands\ResetPermission;
use Jed\Core\Console\Commands\ResetSetting;
use Illuminate\Support\Facades\Schema;
use Jed\Core\Console\Commands\InstallSystem;

class CoreServiceProvider extends ServiceProvider
{
    protected $commands = [
        MigrateAll::class,
        ResetSetting::class,
        AddressImport::class,
        GenerateSitemap::class,
        ResetPermission::class,
        InstallSystem::class
    ];

    public function boot()
    {
        Paginator::useBootstrap();
        $this->registerSettings();

        VerifyEmail::toMailUsing(function ($notifiable, $url) {
            $mail = new MailMessage;
            $mail->subject('Welcome to '. env('APP_NAME'));
            $mail->markdown(resolveView('core::emails.email-verify'), ['url' => $url, 'user' => $notifiable]);
            return $mail;
        });
    }
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(__DIR__ . '/../../config/app.php', 'app');
        $this->mergeConfigFrom(__DIR__ . '/../../config/address.php', 'address');
        $this->mergeConfigFrom(__DIR__ . '/../../config/permissions.php', 'permissions');

        $this->register_includes();
        $this->registerMacros();
    }

    public function register_includes()
    {
        $this->commands($this->commands);
        $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'core');

        include __DIR__ . '/../helpers.php';
    }

    public function registerSettings()
    {
        if (config('database.connections.mysql.database') != 'forge' && Schema::hasTable('settings')) {
            $settings = settings();
            //SETTING GOLBAL CONFIGURATION FOR SMTP EMAIL DRIVER
            if (isset($settings['email_settings'])) {
                $email_settings = $settings['email_settings'];
                if ($email_settings['smtp_setting'] && $email_settings['smtp_setting']['mail_mailer'] === 'smtp') {
                    config()->set('mail.default', $email_settings['smtp_setting']['mail_mailer']);
                    $smtp_settings = $email_settings['smtp_setting'];
                    $smtp_setting = [
                        'transport' => 'smtp',
                        'host' => $smtp_settings['mail_host'],
                        'port' => $smtp_settings['mail_port'],
                        'encryption' => $smtp_settings['mail_encryption'],
                        'username' => $smtp_settings['mail_username'],
                        'password' => $smtp_settings['mail_password'],
                        "timeout" => null,
                        "auth_mode" => null
                    ];
                    config()->set('mail.mailers.smtp', $smtp_setting);
                    config()->set('mail.from', [
                        'address' => $smtp_settings['mail_from_address'],
                        'name' => $smtp_settings['mail_from_name']
                    ]);
                }
            }

            //SETTING GOLBAL CONFIGURATION FOR SOCIAL LOGIN
            if (isset($settings['social_settings'])) {
                $social_settings  = $settings['social_settings'];
                $s_settings = [
                    'google' => [
                        'client_id' => $social_settings['google']['google_client_id'],
                        'client_secret' => $social_settings['google']['google_client_secret'],
                        'redirect' => env('APP_URL') . '/user/social-login/google/callback',

                    ],
                    'facebook' => [
                        'client_id' => $social_settings['facebook']['facebook_app_id'],
                        'client_secret' => $social_settings['facebook']['facebook_app_secret'],
                        'redirect' => env('APP_URL') . '/user/social-login/facebook/callback',
                    ]
                ];
                $services = config('services');
                config()->set('services', array_merge($services, $s_settings));
            }
        }
    }

    public function registerMacros()
    {
        Collection::macro('setAppends', function ($attributes) {
            return $this->map(function ($item) use ($attributes) {
                return $item->setAppends($attributes);
            });
        });
    }
}
