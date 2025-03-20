<?php

use Illuminate\Database\Seeder;
use Jed\Core\App\Admin;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Admin::create([
            'name' => "System Admin",
            'email' => 'admin@jed.com',
            'password' => bcrypt('password')
        ]);
    }
}
