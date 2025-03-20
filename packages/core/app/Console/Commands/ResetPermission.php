<?php

namespace Jed\Core\Console\Commands;

use Illuminate\Console\Command;
use Jed\Core\App\Admin;
use Jed\Core\App\Role;
use Jed\Core\App\Setting;
use Jed\Core\Helpers\PackageHelper;

class ResetPermission extends Command
{
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
    protected $signature = 'jed:reset-permission';

  /**
   * The console command description.
   *
   * @var string
   */
    protected $description = 'This command will reset the super admin\'s permission.';

  /**
   * Create a new command instance.
   *
   */
    public function __construct()
    {
        parent::__construct();
    }

  /**
   * Execute the console command.
   *
   * @return mixed
   */
    public function handle()
    {
        $this->info("\n=============================================");
        $this->info("== Reset super admin's permission.");
        $this->info("=============================================");


        $super_admin = Admin::find(1);

        $permissions = [];
        foreach (config('permissions') as $module) {
            foreach ($module['permissions'] as $permission => $name) {
                $permissions[] = $permission;
            }
        }

        $role = Role::find(1);
        if (!$role) {
            $role = Role::create([
            'name' => "Administrator",
            'permissions' => $permissions
            ]);
        } else {
            $role->update([
            'permissions' => $permissions
            ]);
        }

        $super_admin->update([
        'role_id' => $role->id
        ]);
        $this->info("Permission reset finished.");
    }
}
