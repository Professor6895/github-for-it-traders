<?php

return [
  'modules' => [
    'ecommerce' => [
      'module' => 'ecommerce',
      'has_setting' => true,
      'default_setting' => [
        'order_placed_message' => 'Dear {user_name}, Your order {order_id} has been successfully placed. Thank you for shopping with us.',
        'order_confirmed_message' => 'Dear {user_name}, Your order {order_id} has been confirmed. Thank you for shopping with us.',
        'order_canceled_message' => 'Dear {user_name}, We are sorry to inform you that your order {order_id} has been canceled.',
        'order_dispatched_message' => 'Dear {user_name}, We are glad to inform you that your order {order_id} has been dispatched. Your total order amount is Rs. {order_total}. Thank you for shopping with us.',
        'order_completed_message' => 'Dear {user_name}, Your order {order_id} has been delivered and completed. Thank you for shopping with us.',
        'website_per_page_pagination' => 30,
        'initial_popup' => [
          'interval' => 'everytime', //Number of minutes (e.g 4, 5, 10 ....)
          'image' => '',
          'enabled' => false,
          'popup_delay' => 5, //Number of seconds (e.g 4, 5, 10 ....)
          'link' => ''
        ]
      ]
    ]
    ],
    'dataimports' => [
      [
        'name' => 'Import Products',
        'slug' => 'import-products',
        'component' => 'ImportProducts',
        'module' => 'ecommerce',
      ],
      [
        'name' => 'Update Product Price/Qty',
        'slug' => 'import-product-price',
        'component' => 'UpdateProductPrice',
        'module' => 'ecommerce',
      ],
    ]
  ];
