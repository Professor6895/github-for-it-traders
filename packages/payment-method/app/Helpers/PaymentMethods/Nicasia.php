<?php
namespace Jed\PaymentMethod\App\Helpers;

use Exception;
use Jed\PaymentMethod\App\PaymentMethod;

class Nicasia
{
  protected $config;
  /**
   * @return \SecureGateway
   */
  public function __construct()
  {
    $nicasia = PaymentMethod::where('slug', 'nicasia')->first();
    $config = json_decode($nicasia->config, true);
    $this->config = $config;
  }


  /**
   * @param array $parameters
   * @return $response
   */
  public function verifyPayment($args)
  {

    // $url = "https://khalti.com/api/payment/verify/";

    // # Make the call using API.
    // $ch = curl_init();
    // curl_setopt($ch, CURLOPT_URL, $url);
    // curl_setopt($ch, CURLOPT_POST, 1);
    // curl_setopt($ch, CURLOPT_POSTFIELDS, $args);
    // curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

    // $headers = ['Authorization: Key ' . $this->config['secret_key']];
    // curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    // // Response
    // $response = curl_exec($ch);
    // $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    // curl_close($ch);
    // $token = json_decode($response, TRUE);

    // if (isset($token['idx']) && $status_code == 200) {
    //   // $khalti = $khalti->update(['status' => 1 , 'verified_token' => $token['idx']]);
    //   return [
    //     'status' => true,
    //     'token' => $token['idx']
    //   ];
    // }
    // return [
    //   'status' => false,
    // ];
  }
}
