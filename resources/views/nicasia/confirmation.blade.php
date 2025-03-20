<?php 
define ('HMAC_SHA256', 'sha256');
define ('SECRET_KEY', '1e5e49d59fae4e859683b9242c39330ecccb1da2ac6c48349370e6861a87f165ea4c22d7db50447c9247a9e645719423f9c0263fa09d4af2abddf10d9cd90fc98cbfa9eb7d154acbb1c0e9fc34dac745b451703535d84394a9ef2917ad4fded65e140a442fae40759ae805aebb94e7330744534be6a84e7cb76dcdd2d467434c');

function sign ($params) {
  return signData(buildDataToSign($params), SECRET_KEY);
}

function signData($data, $secretKey) {
    return base64_encode(hash_hmac('sha256', $data, $secretKey, true));
}

function buildDataToSign($params) {
        $signedFieldNames = explode(",",$params["signed_field_names"]);
        foreach ($signedFieldNames as $field) {
           $dataToSign[] = $field . "=" . $params[$field];
        }
        return commaSeparate($dataToSign);
}

function commaSeparate ($dataToSign) {
    return implode(",",$dataToSign);
}

?>
@extends('packages.core.website.layouts.master')
 
   
@section('content')
<section class="section-big-py-space b-g-light">
    <div class="custom-container"><div class="checkout-page">
        <form id="finalpayform" action="https://testsecureacceptance.cybersource.com/pay" role="form" method="post"/>
 <?php
    foreach($_REQUEST as $name => $value) {
        $params[$name] = $value;
    }
?> 
    <?php
        foreach($params as $name => $value) {
            echo "<input type=\"hidden\" id=\"s" . $name . "\" name=\"" . $name . "\" value=\"" . $value . "\"/>\n";
        }
        echo "<input type=\"hidden\" id=\"signature\" name=\"signature\" value=\"" . sign($params) . "\"/>\n";
    ?>
 <input type="text" name="card_type" value="001">
<input type="text" name="card_number" value="">
<input type="text" name="card_expiry_date" value=""> 
            <div class="checkout-form">
                <div class="row">
                  
<div class="col-lg-12 col-sm-12 col-xs-12">
     <div class="checkout-title"><h3>NIC ASIA PAYMENT PROCESSING</h3></div> 
    <div class="checkout-details theme-form"><div class="order-box">
          </div> <div class="payment-box"> 
  <div class="title-box"><div><a href="{{ route('website.product-list') }}" id="btn--place-order" class="btn-normal btn">Return to shop</a> <span>    <button type="submit"   class="btn-normal btn">Continue to Payment</button></span></div> </div>
           </div>
       </div>
   </div>
</div>
</div>
</form>
</div>
</div>
</section>
 
@endsection
@section('script')
<script>
    var spinner = $('#loader'); 
  $(function(){  // document.ready function...
   setTimeout(function(){
    spinner.show(); 
      $('#finalpayform').submit();
    },1000);
});
</script>
@endsection