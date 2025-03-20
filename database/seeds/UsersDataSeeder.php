<?php

use Illuminate\Database\Seeder;
use Jed\Core\App\User;

class UsersDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        require('data/users.php');
        foreach ($users as $key => $user) {
            $social_platform =  null;

            if ($user['avatar']) {
                if (str_contains($user['avatar'], 'googleusercontent')) {
                    $social_platform = 'gmail';
                }

                if (str_contains($user['avatar'], 'facebook')) {
                    $social_platform = 'facebook';
                }
            }
            $new_user = User::create([
                'name' => $user['name'],
                'email' => $user['email'],
                'contact_number' => $user['contact_number'],
                'avatar' => $user['avatar'],
                'address' => $user['address'],
                'date_of_birth' => $user['dob'],
                'social_id' => $user['social_id'],
                'password' => $user['password'],
                'created_at' => $user['updated_at'],
                'updated_at' => $user['updated_at'],
                'social_platform' => $social_platform
            ]);
            if ($new_user)
                echo "{$key}. {$new_user->name} Imported. \n";
        }
    }
}
