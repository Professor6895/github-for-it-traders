<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Jed\Ecommerce\App\DiscountCampaign;
use Jed\Ecommerce\App\Vendor;
use Jed\Ecommerce\Cart\VendorCategory;

class DiscountController extends Controller
{
    public function getDiscountCampaign($slug)
    {
        $campaign = DiscountCampaign::where('slug', $slug)->firstOrFail();
        dd($campaign);
    }
}
