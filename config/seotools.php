<?php
/**
 * @see https://github.com/artesaos/seotools
 */

return [
    'meta' => [
        /*
         * The default configurations to be used by the meta generator.
         */
        'defaults'       => [
            'title'        => env('APP_NAME'), // set false to total remove
            'titleBefore'  => false, // Put defaults.title before page title, like 'It's Over 9000! - Dashboard'
            'description'  => '', // set false to total remove
            'separator'    => ' - ',
            'keywords'     => [],
            'canonical'    => false, // Set null for using Url::current(), set false to total remove
            'robots'       => 'index, follow', // Set to 'all', 'none' or any combination of index/noindex and follow/nofollow
        ],
        /*
         * Webmaster tags are always added.
         */
        'webmaster_tags' => [
            'google'    => null,
            'bing'      => null,
            'alexa'     => null,
            'pinterest' => null,
            'yandex'    => null,
            'norton'    => null,
        ],

        'add_notranslate_class' => false,
    ],
    'opengraph' => [
        /*
         * The default configurations to be used by the opengraph generator.
         */
        'defaults' => [
            'title'       => env('APP_NAME'), // set false to total remove
            'description' => '', // set false to total remove
            'url'         => false, // Set null for using Url::current(), set false to total remove
            'type'        => false,
            'site_name'   => false,
            'images'      => [],
        ],
    ],
    'twitter' => [
        /*
         * The default values to be used by the twitter cards generator.
         */
        'defaults' => [
            //'card'        => 'summary',
            //'site'        => '@LuizVinicius73',
        ],
    ],
    'json-ld' => [
        /*
         * The default configurations to be used by the json-ld generator.
         */
        'defaults' => [
            // 'name' => "Fatafat Sewa",
            'title'       => env("APP_NAME"), // set false to total remove
            'description' => 'Fatafat Sewa | Buy mobile, gadgets, accessories, hardware, alcohol, bike, car & parts at the best possible price in Nepal. EMI Service with insurance in Nepal', // set false to total remove
            'url'         => null, // Set null for using Url::current(), set false to total remove
            'type'        => 'LocalBusiness',
            // 'images'      => ['https://fatafatsewa.com/storage/uploads/images/settings/core/1641902232-1630.png'],
            // 'address' => [
            //     '@type' => 'PostalAddress',
            //     "streetAddress" => "Jhamsikhel Rd-3, Lalitpur",
            //     "addressLocality" => "Lalitpur",
            //     "addressRegion" => "Bagmati",
            //     "postalCode" => "44700",
            //     "addressCountry" =>  "Nepal",
            // ],
            // "openingHoursSpecification" => [
            //     [
            //         "@type" =>  "OpeningHoursSpecification",
            //         "dayOfWeek" => ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            //         "opens" => "10:00", "closes" => "19:30"
            //     ]
            //     ],
            //     "sameAs" => ["https://www.facebook.com/fatafatsewa/", "https://www.instagram.com/fatafatsewanp", "https://www.tiktok.com/@fatafatsewa.com", "https://www.pinterest.com/fatafatsewa/", "https://twitter.com/fatafatsewa", "https://www.youtube.com/channel/UCXzJ-tVhKAjcOi8yluL8aTw"]
        ],
    ],
];
