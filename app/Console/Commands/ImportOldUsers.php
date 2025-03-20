<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Jed\Core\App\User;
use Jed\Ecommerce\App\Product;
use Jed\Ecommerce\App\ProductBrand;
use Jed\Ecommerce\App\ProductCategory;

class ImportOldUsers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import-old-users';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $old_users = DB::connection('mysql2')->table('users')->get();
        foreach ($old_users as $key => $old_user) {
            $user = User::where('email', $old_user->email)->first();
            if (!$user) {
                $user = User::create([
                'id' => $old_user->id,
                'name' => $old_user->first_name . ' ' . $old_user->last_name,
                'email' => $old_user->email,
                'password' => $old_user->password,
                'contact_number' => $old_user->phone,
                'referral_code' => $old_user->referral_code,
                'referred_by' =>  $old_user->referred_by,
                'reward_points' => $old_user->reward_points,
                'email_verified_at' => $old_user->email_verified_at,
                ]);
                echo ($key + 1) . ".  Added '" . $user->name . "' \n";
            }
        }
    }
}
