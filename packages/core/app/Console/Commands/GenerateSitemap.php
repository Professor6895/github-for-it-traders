<?php

namespace Jed\Core\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Jed\Core\Helpers\PackageHelper;
use Spatie\Sitemap\Sitemap;

/**
 * Class MigrateAll
 * @package Robust\Core\Console\Commands
 */
class GenerateSitemap extends Command
{
 /**
  * The name and signature of the console command.
  *
  * @var string
  */
    protected $signature = 'jed:generate-sitemap';

 /**
  * The console command description.
  *
  * @var string
  */
    protected $description = 'It creates sitemap from all the packages';

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
    public function handle(Filesystem $filesystem, Sitemap $map)
    {
     // $this->info("\n=============================================");
     // $this->info("== Migrating");
     // $this->info("=============================================");
     // $packages = PackageHelper::names();

     // $executeMigrations = $this->confirm("Would you like to execute your migrations? [y|N]", false);
     // if ($executeMigrations) {
     //     foreach ($packages as $key => $package) {
     //         $this->info("---------------------- Executing migration for $package ----------------------------");
     //         $this->call("migrate", ["--path" => "packages/$key/database/migrations"]);
     //     }
     // }

        $this->info("\n=============================================");
        $this->info("============ Generating Sitemap =============");
        $this->info("=============================================");
        $fh = fopen(public_path('urllist.txt'), 'w');
        fclose($fh);
        $txt_file = fopen(public_path('urllist.txt'), 'a');
        $packages = PackageHelper::names();
        foreach ($packages as $key => $package) {
            $this->info("Entering {$package}");
            if ($filesystem->exists(base_path() . "/packages/{$key}/app/Helpers/SitemapHelper.php")) {
                $class = "Jed\\{$package}\\Helpers\\SitemapHelper";
                $helper = new $class();
                $map = $helper->generate($map);

                foreach ($helper->urls as $Url) {
                    fwrite($txt_file, $Url . "\n");
                }
                $this->info("--------------- Created for {$package} module \n");
            } else {
                $this->warn("--------------- Not found on {$package} module \n");
            }
        }

        fclose($txt_file);
        $path = public_path('sitemap.xml');
        $map->writeToFile($path);
    }
}
