@component('mail::layout')
{{-- Header --}}
@slot('header')
@component('mail::header', ['url' => config('app.url')])
{{-- <img src="{{ url(settings()['core']['logo']) }}" alt="" width="200px"> --}}
@endcomponent
@endslot

<div style="text-align: center">
    <img src="{{ url(settings()['core']['logo']) }}" alt="" width="150px" style="margin: auto">
</div>
<br>
<h1>Hello, {{ $user->name }}</h1>
<h2>Welcome to It Traders Nepal.</h2>

<p>Please click the button below to verify your email address.</p>

@component('mail::button', ['url' => $url, 'color' => 'success'])
Verify Email Addresss
@endcomponent
<br>
<p>If you did not create an account, no further action is required.</p>
<hr>
<p>

If you’re having trouble clicking the "Verify Email Address" button, copy and paste the URL below into your web browser: {{ $url }}
</p>
{{-- Footer --}}
@slot('footer')
@component('mail::footer')
© {{ date('Y') }} {{ config('app.name') }}. @lang('All rights reserved.')
@endcomponent
@endslot
@endcomponent