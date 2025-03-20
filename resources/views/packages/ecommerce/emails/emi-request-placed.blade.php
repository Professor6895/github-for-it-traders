<style>
    body {
        font-family: Helvetica, sans-serif;
        font-size: 13px;
    }

    .container {
        max-width: 680px;
        margin: 0 auto;
    }

    .logotype {
        background: #000;
        color: #fff;
        width: 75px;
        height: 75px;
        line-height: 75px;
        text-align: center;
        font-size: 11px;
    }

    .bordered-table {
        border-collapse: collapse
    }

    .bordered-table td,
    .bordered-table th {
        border: 1px solid #ddd;
        padding: 8px;
    }

    .bordered-table tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    .alert {
        background: #ffd9e8;
        padding: 20px;
        margin: 20px 0;
        line-height: 22px;
        color: #333
    }

    .socialmedia {
        background: #eee;
        padding: 20px;
        display: inline-block
    }

    .button-orange{
      background: #FF6000
    }

</style>
@component('mail::layout')
    @slot('header')
        @component('mail::header', ['url' => config('app.url')])
        @endcomponent
    @endslot

    <div style="text-align: center">
        <img src="{{ url(settings()['core']['logo']) }}" alt="" width="150px" style="margin: auto">
    </div>

    <p style="font-size: 17px; margin-top: 20px">New EMI Request from <strong>{{ $emi_request->name }}</strong></p>
    <small style="margin-bottom: 15px;display:inline-block"><strong>Application Date: </strong>{{ $emi_request->created_at->format('jS \\of F Y h:i:s A') }}</small>
    <table width="80%" align="center" class="bordered-table">
        <tr>
            <th>Customer</th>
            <td>{{ $emi_request->name }}</td>
        </tr>
        <tr>
            <th>Quotation For</th>
            <td>
                <span style="font-size: 14px; font-weight:bold">{{ $emi_request->product->name }}</span>
                @if ($emi_request->product_attributes)
                    <br>
                    @foreach ($emi_request->product_attributes as $key => $attr)
                        <span><strong>{{ $key }}</strong>: {{ $attr }}</span><br>
                    @endforeach
                @endif
            </td>
        </tr>

        <tr>
            <th>Down Payment</th>
            <td>NPR {{ $emi_request->down_payment }} /-</td>
        </tr>

        <tr>
            <th>Finance Amount</th>
            <td>NPR {{ $emi_request->finance_amount }} /-</td>
        </tr>

        <tr>
            <th>Duration in Month</th>
            <td> {{ $emi_request->emi_mode }} Months</td>
        </tr>

        <tr>
            <th>EMI Per Month</th>
            <td>NPR {{ $emi_request->emi_per_month }} /-</td>
        </tr>
        <tr>
            <th>Bank</th>
            <td> {{ $emi_request->bankDetail->name }} /-</td>
        </tr>

    </table>

    @component('mail::button', ['url' => url('/admin/emi-request/'. $emi_request->id), 'color' => 'primary'])
       View in Dashboard
    @endcomponent
    @slot('footer')
        @component('mail::footer')
            © {{ date('Y') }} {{ config('app.name') }}. @lang('All rights reserved.')
        @endcomponent
    @endslot
@endcomponent
