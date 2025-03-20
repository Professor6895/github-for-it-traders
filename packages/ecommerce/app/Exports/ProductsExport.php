<?php
namespace  Jed\Ecommerce\App\Exports;

use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class ProductsExport implements FromView
{
    protected $products;
    public function __construct($products)
    {
        $this->products = $products;
    }

    public function view(): View
    {
        return view('ecommerce::exports.data-import.products_export', [
            'products' => $this->products
        ]);
    }
}
