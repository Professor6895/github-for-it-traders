<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Jed\Ecommerce\App\Vendor;
use Jed\Ecommerce\Cart\VendorCategory;

class VendorController extends Controller
{
    public function getVendorDashboard($slug)
    {
        $vendor = Vendor::query()->where('slug', $slug)->firstOrFail();
        $banner_images = $vendor->getMedia('banner_image');

        $vendor_categories = VendorCategory::with('category')->where(['vendor_id' => $vendor->id, 'show_on_dashboard' => 1])->get();
        return view('packages.ecommerce.website.vendor.dashboard', compact('vendor', 'banner_images', 'vendor_categories'));
    }
}
