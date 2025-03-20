<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->

    <title>{{ env('APP_NAME')}} - Dashboard</title>
    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('dashboard/css/main.css') }}">
    <link rel="stylesheet" href="{{ asset('dashboard/css/iconfont.css') }}">
    <link rel="stylesheet" href="{{ asset('dashboard/css/material-icons/material-icons.css') }}">
    <link rel="stylesheet" href="{{ asset('dashboard/css/vuesax.css') }}">
    <link rel="stylesheet" href="{{ asset('dashboard/css/app.css') }}">

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ asset('/favicon.png') }}">
  </head>
  <body>
    <noscript>
      <strong>We're sorry but Dashboard doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app">
    </div>

    <!-- <script src="js/app.js"></script> -->
    {{-- @if(request()->is('admin/student-admission'))
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/webcamjs/1.0.25/webcam.js"></script>
    @endif --}}
    
    <script src="{{ asset('dashboard/js/app.js?ver=1.5.7') }}"></script>

  </body>
</html>
