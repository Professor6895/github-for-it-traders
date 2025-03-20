<?php

use Illuminate\Database\Seeder;
use Jed\Core\App\Contact;
use Faker\Factory as Faker;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        foreach (range(1, 5000) as $index) {
            Contact::create([
                'name' => $faker->name,
                'email' => $faker->email,
                'contact' => rand(1000, 100000),
                'subject' => $faker->sentence,
                'message' => $faker->paragraph
            ]);
        }
    }
}
