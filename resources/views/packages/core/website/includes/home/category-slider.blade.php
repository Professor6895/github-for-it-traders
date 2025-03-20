<section class="rounded-category">
    <div class="custom-container">
        <div class="row">
            <div class="col">
                <div class="slide-10 no-arrow">
                    @foreach ($product_categories as $category)
                        <div>
                            <div class="category-contain">
                                <div class="img-wrapper">
                                    <a href="{{ route('website.category-detail', $category->slug) }}">
                                        <img src="{{ $category->product_category_image['thumb'] }}"
                                            alt="
                                            {{ $category->title }} "
                                            loading="lazy" class=" img-fluid">
                                    </a>
                                </div>
                                <a href="{{ route('website.category-detail',  $category->slug) }}"
                                    class="btn-rounded">
                                    {{ $category->title }}
                                </a>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>
