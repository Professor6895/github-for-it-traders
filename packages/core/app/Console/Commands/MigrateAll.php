<?php

namespace Jed\Core\Console\Commands;

use Illuminate\Console\Command;
use Jed\Core\Helpers\PackageHelper;

/**
 * Class MigrateAll
 * @package Robust\Core\Console\Commands
 */
class MigrateAll extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'jed:migrate-all';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'It executes all the migration  files';

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
        $this->info("== Migrating");
        $this->info("=============================================");
        $packages = PackageHelper::names();

        // $executeMigrations = $this->confirm("Would you like to execute your migrations? [y|N]", false);
        // if ($executeMigrations) {
            foreach ($packages as $key => $package) {
                $this->info("---------------------- Executing migration for $package ----------------------------");
                $this->call("migrate", ["--path" => "packages/$key/database/migrations"]);
            }
        // }

    }
}
