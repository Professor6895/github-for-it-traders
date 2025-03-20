@if (isset($images))
    @php
        $banners_count = count($images);
        switch ($banners_count) {
            case 1:
                $class = 'col-md-12';
                break;
            case 2:
                $class = 'col-md-6';
                break;
            case 3:
                $class = 'col-md-4';
                break;
            default:
                $class = 'col-md-3';
        }
    @endphp
    <section class="{{ $banners_count > 1 ?'collection-banner':'' }}  mt-2 mb-2">
        <div class="container-fluid">
            <div class="row collection2">
                @foreach ($images as $home_banner_first)
                    <div class="{{ $class }}">
                        <a href="{{ $home_banner_first['link'] }}">
                            <div class="collection-banner-main p-left">
                                    <img src="{{ $home_banner_first['banner_image']['full'] }}" loading="lazy"
                                        class="img-fluid w-full" alt="Ittraders Banner">
                            </div>
                        </a>
                    </div>
                @endforeach
            </div>
        </div>
    </section>
@endif