<?php

namespace Jed\Core\Console\Commands;

use Illuminate\Console\Command;
use Jed\Core\Helpers\PackageHelper;

/**
 * Class MigrateAll
 * @package Robust\Core\Console\Commands
 */
class DatabaseSeed extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'jed:seed';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'It executes all the seeder files';

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
        $this->info("== Seeding");
        $this->info("=============================================");
        $packages = PackageHelper::names();

        $executeSeeds = $this->confirm("Would you like to execute your seeds? [y|N]", false);
        if ($executeSeeds) {
            foreach ($packages as $key => $package) {$executeSeeds = $this->confirm("Would you like to execute your seeds for {$package}? [y|N]", false);
                if ($executeSeeds) {
                    $this->info("/packages/jeevan/{$key}/database/seeds/{$package}DatabaseSeeder.php");
                    $this->info(file_exists(base_path() . "/packages/jeevan/{$key}/database.seeds/{$package}DatabaseSeeder.php"));
                    if (file_exists(base_path() . "/packages/jeevan/{$key}/database/seeds/{$package}DatabaseSeeder.php")) {
                        $this->info("Executing seed for $package");
                        $this->call("db:seed", ["--class" => "{$package}DatabaseSeeder"]);
                    }
                }
            }
        }

    }
}
