<?php
namespace  Jed\Ecommerce\App\Exports;

use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class OrdersExport implements FromView
{
    protected $orders;
    public function __construct($orders)
    {
        $this->orders = $orders;
    }

    public function view(): View
    {
        return view('ecommerce::exports.data-import.orders_export', [
            'orders' => $this->orders
        ]);
    }
}
