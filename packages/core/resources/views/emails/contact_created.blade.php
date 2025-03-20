@component('mail::layout')
{{-- Header --}}
@slot('header')
@component('mail::header', ['url' => config('app.url')])
<img src="{{ url(settings()['core']['logo']) }}" alt="" width="100px">
@endcomponent
@endslot

Hello Admin,

You've recieved contact inquiry from {{ $contact->name }}.

@component('mail::button', ['url' => url("admin/contact-inquiry/{$contact->id}"), 'color' => 'success'])
View on dashboard
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