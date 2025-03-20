<?php

namespace Jed\Core\Console\Commands;

use Illuminate\Console\Command;
use Jed\Core\App\District;
use Jed\Core\App\Province;

class AddressImport extends Command
{
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'jed:address-import';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'This command will import address from config file (address.php) in core module.';

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
    $this->info("== IMPORT ADDRESS FROM ADDRESS CONFIG IN CORE.");
    $this->info("=============================================");

    District::truncate();
    Province::truncate();

    $addresses = config('address');
    foreach ($addresses['provinces'] as $province) {
      Province::create([
        'name' => $province
      ]);
    }

    foreach ($addresses['districts'] as $key => $districts) {
      foreach ($districts as $district) {
        District::create([
          'name' => $district,
          'province_id' => $key
        ]);
      }
    }
  }
}
