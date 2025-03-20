<?php

namespace Jed\Core\Console\Commands;

use Illuminate\Console\Command;
use Jed\Core\App\Setting;
use Jed\Core\Helpers\PackageHelper;

class ResetSetting extends Command
{
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
    protected $signature = 'jed:reset-setting';

  /**
   * The console command description.
   *
   * @var string
   */
    protected $description = 'This command will reset the application settings.';

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
        $this->info("== Fully Reset or Update system's settings.");
        $this->info("=============================================");
        $packages = PackageHelper::names();
        if ($this->option('no-interaction')) {
            $option = '1';
        } else {
            $option = $this->ask("Choose an option below. \n 1. Update settings and reset all data. \n 2. Update settings and keep current data.");
        }

        if ($option === '1' || $option === '2') {
            $modules = config('app.modules');
            foreach ($modules as $module => $options) {
                if (isset($options['has_setting']) && $options['has_setting'] == true) {
                    $module_setting = Setting::where(['module' => $module])->first();
                    if ($module_setting) {
                        if ($option === '1') {
                              $module_setting->update([
                               'settings' => (isset($options['default_setting'])) ? json_encode($options['default_setting']) : json_encode([])
                              ]);
                        }

                        if ($option === '2') {
                            $current_settings = json_decode($module_setting->settings, true);
                            $default_settings = $options['default_setting'];

                            $new_settings = [];
                            foreach ($default_settings as $key => $value) {
                                if (isset($current_settings[$key])) {
                                    $new_settings[$key] = $current_settings[$key] ? : $value;
                                } else {
                                    $new_settings[$key] = $value;
                                }
                            }
                            $module_setting->update([
                              'settings' => json_encode($new_settings)
                             ]);
                        }
                    } else {
                        Setting::create([
                        'module' => $module,
                        'settings' => (isset($options['default_setting'])) ? json_encode($options['default_setting']) : json_encode([])
                        ]);
                    }
                }
            }
        } else {
            $this->error('It seems like you\'ve choosen invalid option. ABORTING!!');
        }
    }
}
