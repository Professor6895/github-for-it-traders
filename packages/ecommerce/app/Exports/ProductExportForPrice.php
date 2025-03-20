<?php
namespace  Jed\Ecommerce\App\Exports;

use App\Invoice;
use Illuminate\Contracts\View\View;
use Jed\Ecommerce\App\Helpers\ProductHelper;
use Jed\Ecommerce\App\ProductCategory;
use Maatwebsite\Excel\Concerns\FromView;

class ProductExportForPrice implements FromView
{
    protected $category_id;
    public function __construct($category_id)
    {
        $this->category_id = $category_id;
    }

    public function view(): View
    {
        $category = ProductCategory::find($this->category_id);
        $product_helper = new ProductHelper();
        $products = $product_helper->getProductsByCategory($category);
        return view('ecommerce::exports.data-import.products_for_price', [
            'products' => $products
        ]);
    }
}
