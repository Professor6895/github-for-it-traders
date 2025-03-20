@extends('packages.core.website.layouts.master')

@section('content')
    <div class="custom-container mt-3">
        <div class="row mb-3">
            <h1 class="font-30">{{ $vendor->name }}</h1>
        </div>
        <div class="row">
            <div class="slide-1 no-arrow">
                @foreach ($banner_images as $banner_image)
                    <div>
                        <div class="slider-banner">
                            <div class="slider-img">
                                <a href="{{ $banner_image->custom_properties['link'] }}">

                                    <img src="{{ $banner_image->getUrl() }}" class="w-full" alt="slider"
                                        loading="lazy">
                                </a>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
    @foreach ($vendor_categories as $vendor_category)
        @php
            $category = $vendor_category->category;
            $cat_arrays = array_merge(
                $category
                    ->getAllChildren()
                    ->pluck('id')
                    ->toArray(),
                [$category->id],
            );
            $products = Jed\Ecommerce\App\Product::with('media', 'reviews:id,product_id,rating')
                ->enabled()
                ->join('categories_products', 'products.id', '=', 'categories_products.product_id')
                ->where('products.vendor_id', $vendor->id)
                ->whereIn('categories_products.product_category_id', $cat_arrays);
            
            $products = $products->inRandomOrder();
            $products = $products->limit(10);
            
            $products = $products->get();
            $view_link = route('website.product-list', ['category' => $category->slug]);
        @endphp

        <div class="vendor-product-slider">
            @include('packages.core.website.common.prodcut-slider', ['products' => $products, 'title' => $category->title,
            'view_link' => $view_link, 'class' => 'vendor--product-slider'])
        </div>
    @endforeach
@endsection
