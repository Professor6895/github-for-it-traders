@component('mail::layout')
{{-- Header --}}
@slot('header')
@component('mail::header', ['url' => config('app.url')])
<img src="{{ asset('/images/logo.png') }}" alt="" width="100px">
@endcomponent
@endslot

<h3>Hello, {{ $admin->name }}</h3>
<p>Your admin account has been created for {{ config('app.name') }}</p>

<p>Now you may login to the admin dashboard using credentials below:</p>

<br>
<strong>Credentials</strong>

<p><strong>Email: </strong>{{ $admin->email }}</p>
<p><strong>Password: </strong>{{ $password }}</p>
@component('mail::button', ['url' => url('/admin/login'), 'color' => 'success'])
Visit Dashboard
@endcomponent

Thanks<br>
Regards, {{ config('app.name') }}
{{-- Footer --}}
@slot('footer')
@component('mail::footer')
© {{ date('Y') }} {{ config('app.name') }}. @lang('All rights reserved.')
@endcomponent
@endslot
@endcomponent