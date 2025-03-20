<?php 
define ('HMAC_SHA256', 'sha256');
define ('SECRET_KEY', 'f7256a9ae0514c4eb2aba54c89f8fadebfec1894b7a1401b8f02cfd7f252783e1c30f465c7cf4955baa7af8a59623c82d5cfcb54a9434911b7d2741715bf0380b87b22e7272344eaa8c704d5a65b428b7a6165f0ad6d4608b3eb5245f0a3170a83f9c7d6ac9249a6843b757fca1f26a9417dfc2f34f048edbfbc9bc0ebad7d0a');

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
@extends('frontend.layouts.payment')
 
@section('content')
<section class="pt-5 mb-4">
    <div class="container">
        <div class="row">
            <div class="col-xl-8 mx-auto">
                <div class="row aiz-steps arrow-divider">
                    <div class="col done">
                        <div class="text-center text-success">
                            <i class="la-3x mb-2 las la-shopping-cart"></i>
                            <h3 class="fs-14 fw-600 d-none d-lg-block text-capitalize">{{ translate('1. My Cart')}}</h3>
                        </div>
                    </div>
                    <div class="col done">
                        <div class="text-center text-success">
                            <i class="la-3x mb-2 las la-map"></i>
                            <h3 class="fs-14 fw-600 d-none d-lg-block text-capitalize">{{ translate('2. Shipping info')}}</h3>
                        </div>
                    </div>
                    <div class="col done">
                        <div class="text-center text-success">
                            <i class="la-3x mb-2 las la-truck"></i>
                            <h3 class="fs-14 fw-600 d-none d-lg-block text-capitalize">{{ translate('3. Delivery info')}}</h3>
                        </div>
                    </div>
                    <div class="col active">
                        <div class="text-center text-primary">
                            <i class="la-3x mb-2 las la-credit-card"></i>
                            <h3 class="fs-14 fw-600 d-none d-lg-block text-capitalize">{{ translate('4. Payment')}}</h3>
                        </div>
                    </div>
                    <div class="col">
                        <div class="text-center">
                            <i class="la-3x mb-2 opacity-50 las la-check-circle"></i>
                            <h3 class="fs-14 fw-600 d-none d-lg-block opacity-50 text-capitalize">{{ translate('5. Confirmation')}}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="mb-4">
    <div class="container text-left">
        <div class="row">
            <div class="col-lg-8">
               
                     
                    <div class="card shadow-sm border-0 rounded">
                        <div class="card-header p-3">
                            <h3 class="fs-16 fw-600 mb-0">
                                {{ translate('Continue with Nic Asia Payment')}}
                            </h3>
                        </div>
                        <div class="card-body text-center">
                            <div class="row">
                                <div class="col-xxl-8 col-xl-10 mx-auto">
                                    <div class="row gutters-10"> 
    <?php
                 foreach($_REQUEST as $name => $value) {
                     $params[$name] = $value;
                     echo "<span>" . $name . "</span><input type=\"text\" name=\"" . $name . "\" size=\"50\" value=\"" . $value . "\" readonly=\"true\"/><br/>";
                 }

                 echo "<span>Signature Verified:</span><input type=\"text\" name=\"verified\" size=\"50\" value=\"";
                 if (strcmp($params["signature"], sign($params))==0) {
                     echo "True";
                 } else {
                     echo "False";
                 }
                 echo "\" readonly=\"true\"/><br/>";
            ?>
 
                                    </div>
                                </div>
                            </div>
                                       
                        </div>
                    </div>
                  

                    
                 
            </div>

            <div class="col-lg-4 mt-4 mt-lg-0">
               {{-- @include('frontend.partials.cart_summary') --}} 
            </div>
        </div>
    </div>
</section>
@endsection

@section('script')
 
@endsection
