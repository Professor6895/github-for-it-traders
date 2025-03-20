<?php

return [
  'modules' => [
    'core' => [
      'module' => 'core',
      'has_setting' => true,
      'default_setting' => [
        'brand_name' => "JWN - CMS",
        'brand_acronym' => 'CMS',
        'address' => "Kathmandu, Nepal",
        "description" => '',
        'meta_title' => "",
        'meta_description' => "",
        'meta_keywords' => "",
        'logo' => null,
        'email' => '',
        'contact_number' => '',
        'social_facebook' => '',
        'social_twitter' => '',
        'social_instagram' => '',
        'social_linkedin' => '',
        'social_google' => '',
        'social_youtube' => ''
      ]
    ],

    'custom_scripts' => [
      'module' => 'custom_scripts',
      'has_setting' => true,
      'default_setting' => [
        'before_head' => '',
        'before_body' => '',
        'g_map' => '',
      ]
    ],

    'email_settings' => [
      'module' => 'email_settings',
      'has_setting' => true,
      'default_setting' => [
        'smtp_setting' => [
          'mail_mailer' => 'smtp',
          'mail_host' => 'smtp.gmail.com',
          'mail_port' => '587',
          'mail_username' => '',
          'mail_password' => '',
          'mail_encryption' => 'tls',
          'mail_from_address' => '',
          'mail_from_name' => ''
        ],
        'email_setting' => [
          'contact_email' => ''
        ]
      ]
    ],

    'sms_settings' => [
      'module' => 'sms_settings',
      'has_setting' => true,
      'default_setting' => [
        'token' => '',
        'api_endpoint' => ''
      ],
    ],
      'social_settings' => [
      'module' => 'email_social_settingssettings',
      'has_setting' => true,
      'default_setting' => [
        'facebook' => [
          'facebook_app_id' => '',
          'facebook_app_secret' => ''
        ],
        'google' => [
          'google_client_id' => '',
          'google_client_secret' => ''
        ],
      ]
      ]
    ],
  ];
