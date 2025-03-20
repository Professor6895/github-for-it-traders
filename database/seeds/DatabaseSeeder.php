<?php

use Illuminate\Database\Seeder;
use Jed\Ecommerce\Cart\ProductReview;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        // $this->call(AdminSeeder::class);
        for($i = 0; $i <10; $i++) {
        ProductReview::create([
            'user_id' => rand(1,100),
            'product_id' => 23,
            'review' => $faker->sentence(35),
            'rating' => rand(2,5),
            'status' => 1
        ]);
    }
        // $this->call(UsersDataSeeder::class);
    }
}
