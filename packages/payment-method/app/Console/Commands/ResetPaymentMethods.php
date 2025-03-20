<?php

namespace Jed\PaymentMethod\Console\Commands;

use Illuminate\Console\Command;
use Jed\Core\App\District;
use Jed\Core\App\Province;
use Jed\PaymentMethod\App\PaymentMethod;

class ResetPaymentMethods extends Command
{
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'jed:reset-payment-methods';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'This command will initialize all payment methods.';

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
    $this->info("== Importing payment methods from config.");
    $this->info("=============================================");

    $payment_methods = config('payment.payment_methods');

    PaymentMethod::truncate();
    foreach($payment_methods as $payment_method) {
      PaymentMethod::create([
        'name' => $payment_method['name'],
        'slug' => $payment_method['slug'],
        'status'=> $payment_method['status'],
        'config' => json_encode($payment_method['config']),
        "is_international" => $payment_method['is_international'],
        "logo_url" => $payment_method['logo_url']
      ]);
    }
  }
}
