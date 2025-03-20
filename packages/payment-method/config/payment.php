<?php

return [
  'payment_methods' => [
    [
      'name' => 'Esewa',
      'slug' => 'esewa',
      'config' => [
        'merchant_code' => 'epay_payment'
      ],
      'is_international' => 0,
      'status' => 0,
      'logo_url' => asset('/images/esewa.png')
    ],
    [
      'name' => 'Paypal',
      'slug' => 'paypal',
      'config' => [
        'username' => 'sb-jn5s43423369_api1.business.example.com',
        'password' => 'ZYA9ERC4F6QVDVDS',
        'signature' => 'A6eQaA.DsHeY2juQ7ODTjRBXIk4tA7Wpym84zOzNSSs0iRiOddrFCwHZ'
      ],
      'is_international' => 1,
      'status' => 0,
      'logo_url' => asset('/images/paypal.png')
    ],
    [
      'name' => 'Khalti',
      'slug' => 'khalti',
      'config' => [
        'public_key' => '',
        'secret_key' => '',
      ],
      'is_international' => 0,
      'status' => 0,
      'logo_url' => asset('/images/khalti.png')
    ],
    [
      'name' => 'Nicasia',
      'slug' => 'nicasia',
      'config' => [
        'public_key' => '',
        'secret_key' => '',
      ],
      'is_international' => 0,
      'status' => 0,
      'logo_url' => asset('/images/nicasia.png')
    ]
  ]
];
