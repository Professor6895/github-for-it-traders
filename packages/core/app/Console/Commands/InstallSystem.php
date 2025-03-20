<?php

namespace Jed\Core\Console\Commands;

use Illuminate\Console\Command;
use Jed\Core\Helpers\SystemInstaller;
use Artisan;

class InstallSystem extends Command
{
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'jed:install';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Allows to install Akaunting directly through CLI';


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
    set_time_limit(300); // 5 minutes
    $this->prompt();
    $this->info('1. Creating .env file');
    $this->newLine(1);
    SystemInstaller::createDefaultEnvFile();

    $this->info('2. Connecting to database ' . $this->db_name . '@' . $this->db_host . ':' . $this->db_port);
    $this->newLine(1);
    if (!$this->checkDatabaseConnection()) {
      return 1;
    }
    $this->info('3. Migrating all system tables.');
    $this->newLine(1);
    Artisan::call('jed:migrate-all');

    $this->info('4. Creating system super admin.');
    $this->newLine(1);
    SystemInstaller::createAdmin($this->admin_email, $this->admin_password);

    $this->info('5. Reseting permissions.');
    $this->newLine(1);
    Artisan::call('jed:reset-permission');
    $this->info('6. Reseting settings.');
    $this->newLine(1);
    Artisan::call('jed:reset-setting', ['--no-interaction' => true]);

    $this->info('7. Generating JWT secret.');
    $this->newLine(1);
    Artisan::call('jwt:secret');
    $this->info('------- DONE --------');
    $this->newLine(1);

    return 0;
  }


  private function prompt()
  {
    if (empty($this->db_host)) {
      $this->db_host = $this->ask('What is the database host?', 'localhost');
    }

    if (empty($this->db_port)) {
      $this->db_port = $this->ask('What is the database port?', '3306');
    }

    if (empty($this->db_name)) {
      $this->db_name = $this->ask('What is the database name?');
    }

    if (empty($this->db_username)) {
      $this->db_username = $this->ask('What is the database username?', 'root');
    }

    if (!isset($this->db_password)) {
      $this->db_password = $this->secret('What is the database password?', '');
    }

    if (empty($this->company_name)) {
      $this->company_name = $this->ask('What is the company name?', 'My Company');
    }

    if (empty($this->company_email)) {
      $this->company_email = $this->ask('What is the company contact email?', 'my@company.com');
    }

    if (empty($this->admin_email)) {
      $this->admin_email = $this->ask('What is the admin email?', $this->company_email);
    }

    if (empty($this->admin_password)) {
      $this->admin_password = $this->secret('What is the admin password?');
    }
  }

  private function checkDatabaseConnection()
  {
    $this->db_prefix   = '';
    if (!SystemInstaller::checkDBConnection($this->db_host, $this->db_port, $this->db_name, $this->db_username, $this->db_password, $this->db_prefix)) {
      $this->line("\n\n");
      $this->error(" Error: Could not connect to the database! Please, make sure the details are correct.");
      return false;
    }

    return true;
  }
}
