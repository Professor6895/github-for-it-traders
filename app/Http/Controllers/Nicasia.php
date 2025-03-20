<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Exception;
use Jed\PaymentMethod\App\PaymentMethod;
use GuzzleHttp\Client; 
use Session;
use Mail;

 
class Nicasia extends Controller
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

   public function paymentConfirmation(Request $request)
    {   
 
      return view('nicasia.confirmation');   
    }
  /**
   * @param array $parameters
   * @return $response
   */
 public function purchase(array $parameters)
 {
  $response = $this->gateway()
   ->purchase($parameters)
   ->send();

  return $response;
 }

 /**
  * @param array $parameters
  */
 public function verifyPayment(array $parameters)
 {
  if($_REQUEST['decision']=='ACCEPT'):
      return [
        'status' => true,
        'token' =>$_REQUEST['req_reference_number']
      ];
        $order = Order::find($_REQUEST['req_reference_number']);
        
    else:
          return [
      'status' => false,
    ];
     endif; 
 }

 /**
  * @param $amount
  */
 public function formatAmount($amount)
 {
  return number_format($amount, 2, '.', '');
 }
  public function paymentFailure()
    { 
        return redirect()->route('website.cart-checkout')->with('error', sprintf("You just cancelled the payment"));;
    }
}
