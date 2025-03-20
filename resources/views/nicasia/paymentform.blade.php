@extends('frontend.layouts.app')
@section('meta_title')
Online Payment
@endsection
   
@section('content')
 
<section class="mb-4 mt-5">
    <div class="container text-left">
        <div class="row">
            <div class="col-lg-12">
                <form id="payform" class="form-default" action="{{ route('my.paymentconfirmation') }}"  role="form" method="POST" >
                     
                    <div class="card shadow-sm border-0 rounded">
                        <div class="card-header p-3">
                            <h3 class="fs-16 fw-600 mb-0">
                                {{ translate('Online Payment with Nic Asia Bank')}}
                            </h3>
                        </div>
                        <div class="card-body ">
                            <div class=" ">
                                <div class="col-xxl-12 col-xl-12 mx-auto">
                                    <div class="row gutters-10"> 
   
 
<input type="hidden" name="access_key" value="4839e0c1a57934c1a6a229e2cb589b9c">
<input type="hidden" name="profile_id" value="C6537B37-C807-4413-ACD6-BB415D415498">
<input type="hidden" name="transaction_uuid" value="<?php echo uniqid() ?>">
<input type="hidden" name="signed_field_names" value="access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency,payment_method,bill_to_forename,bill_to_surname,bill_to_email,bill_to_phone,bill_to_address_line1,bill_to_address_city,bill_to_address_state,bill_to_address_country,bill_to_address_postal_code,auth_trans_ref_no">
<input type="hidden" name="unsigned_field_names" value="card_type,card_number,card_expiry_date">  
<input type="hidden" name="signed_date_time" value="<?php echo gmdate("Y-m-d\TH:i:s\Z"); ?>">
<input type="hidden" name="locale" value="en">  
<input type="hidden" name="transaction_type" value="sale"> 
 <div class="col-md-12">
 @if ($errors->any())
    <div class="alert alert-danger">
        <button type="button" class="close" data-dismiss="alert">×</button>
        Please check the form below for errors
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
</div>
 <div class="col-md-6">
 <div class="form-group"> 
  <label class="control-label">Order Number</label>
<input type="text" name="order_number" id="order_number" value="{{ old('order_number', '') }}" placeholder="Order Id" >
</div>
</div>
<div class="col-md-6">
     <div class="form-group"> 
          <label class="control-label">Find Order Details</label>
<a href="#" id="find" class="form-control btn btn-primary">Search</a>
</div>
</div>
 <div id="remainingform" class="row">
     
 </div>
 
<input type="hidden" class="form-control" name="currency" value="{{$currency}}"> 
<input type="hidden"class="form-control"  name="payment_method" value="card"> 
<input type="hidden" name="bill_to_address_city" value="Default Kathmandu"> 
<input type="hidden" name="bill_to_address_country" value="NP">
<input type="hidden" name="bill_to_address_postal_code" value="44600">
<input type="hidden" name="auth_trans_ref_no" value="@php echo substr(str_shuffle('0123456789'), 0, 4); @endphp">  
 
                                    </div>
                                </div>
                            </div>
                                       
                        </div>
                    </div>
                    <div class="pt-3"> 
                        <a href="{{ route('terms') }}">{{ translate('terms and conditions')}}</a>,
                        <a href="{{ route('returnpolicy') }}">{{ translate('return policy')}}</a> &
                        <a href="{{ route('privacypolicy') }}">{{ translate('privacy policy')}}</a>
                    </div>

                    <div class="row align-items-center pt-3">
                        <div class="col-6">
                            <a href="{{ route('home') }}" class="link link--style-3">
                                <i class="las la-arrow-left"></i>
                                {{ translate('Return to shop')}}
                            </a>
                        </div>
                        <div class="col-6 text-right">
                            <button id="submitbtn"  class="btn btn-primary fw-600">{{ translate('Continue to Payment')}}</button>
                        </div>
                    </div>
                </form>
            </div> 
        </div>
    </div>
</section>
@endsection

@section('script')
<script>
    var spinner = $('#loader'); 
  $(function(){  
$( "#submitbtn" ).click(function() {
   $('#payform').submit();
});
  // document.ready function...
 });
</script>
<script>
  $(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

   /* When click show user */
$('#find').click(function(){
 var value = $('#order_number').val(); 
$.ajax({
type : 'get',
url : '{{URL::to('order_details')}}',
data:{'order_number':value},
success:function(data){ 
    $('#remainingform').html(data);
 
//$('#find').hide(); 
}
});
  });
});
</script>
@endsection
