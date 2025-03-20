@extends('packages.core.website.layouts.master')
 
   
@section('content')
 <section class="section-big-py-space b-g-light">
    <div class="custom-container"><div class="checkout-page">
        <form action="{{ route('nicasia.paymentconfirmation') }}"  role="form"  method="POST" id="form--place-order">
           
<input type="hidden" name="access_key" value="a71e29b7522d390ebcdb994a1e2df953">
<input type="hidden" name="profile_id" value="A1BB7AFC-8436-4292-BE17-9DB5972551E6">
<input type="hidden" name="transaction_uuid" value="<?php echo uniqid() ?>">
<input type="hidden" name="signed_field_names" value="access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency,payment_method,bill_to_forename,bill_to_surname,bill_to_email,bill_to_phone,bill_to_address_line1,bill_to_address_city,bill_to_address_state,bill_to_address_country,bill_to_address_postal_code,auth_trans_ref_no">
<input type="hidden" name="unsigned_field_names" value="card_type,card_number,card_expiry_date">  
<input type="hidden" name="signed_date_time" value="<?php echo gmdate("Y-m-d\TH:i:s\Z"); ?>">
<input type="hidden" name="locale" value="en">  
<input type="hidden" name="transaction_type" value="sale"> 
<input type="hidden" name="reference_number" value="{{ $order_id }}" >

<input type="hidden" name="amount" value="@php echo (int)$amount @endphp">  
<input type="hidden" name="currency" value="{{$currency}}"> 
<input type="hidden" name="payment_method" value="card"> 
<input type="hidden" name="bill_to_forename" size="25" value="{{ $first_name }}">
<input type="hidden" name="bill_to_surname" size="25" value="{{ $last_name }}">
<input type="hidden" name="bill_to_email" size="25" value="{{ $email }}">
<input type="hidden" name="bill_to_phone" size="25" value="{{ $phone }}">
<input type="hidden" name="bill_to_address_line1" value="{{$address}}">
<input type="hidden" name="bill_to_address_city" value="Default Kathmandu"> 
<input type="hidden" name="bill_to_address_state" value="{{$city}}"> 
<input type="hidden" name="bill_to_address_country" value="{{$country}}">
<input type="hidden" name="bill_to_address_postal_code" value="44600">
<input type="hidden" name="auth_trans_ref_no" value="@php echo substr(str_shuffle('0123456789'), 0, 4); @endphp">  
 
            <div class="checkout-form">
                <div class="row">
                  
<div class="col-lg-12 col-sm-12 col-xs-12">
     <div class="checkout-title"><h3>NIC ASIA PAYMENT PROCESSING</h3></div> 
    <div class="checkout-details theme-form"><div class="order-box">
        <div class="title-box"><div>Payment Detail </div></div> <ul class="sub-total"><li>You are Paying  <span class="count">Rs. @php echo (int)$amount @endphp</span></li></ul>  </div> <div class="payment-box"> 
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
      $('#payform').submit();
    },1000);
});
</script>
@endsection
