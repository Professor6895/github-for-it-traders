@component('mail::layout')
{{-- Header --}}
@slot('header')
@component('mail::header', ['url' => config('app.url')])
<img src="{{ url(settings()['core']['logo']) }}" alt="" width="200px">
@endcomponent
@endslot
<h3>Hey, did you forget your password? Click the button to reset it.</h3>
<br>
@component('mail::button', ['url' => $url, 'color' => 'success'])
Reset Password
@endcomponent
<br>
<p>
 This password reset link will expire in {{ config('auth.passwords.'.config('auth.defaults.passwords').'.expire') }} minutes. If you did not request a password reset, no further action is required.
</p>
<br>
<hr>
<p>
 If you’re having trouble clicking the "Reset Password" button, copy and paste the URL below into your web browser: {{ $url }}
</p>
Thanks<br>
Regards, {{ config('app.name') }}
{{-- Footer --}}
@slot('footer')
@component('mail::footer')
© {{ date('Y') }} {{ config('app.name') }}. @lang('All rights reserved.')
@endcomponent
@endslot
@endcomponent