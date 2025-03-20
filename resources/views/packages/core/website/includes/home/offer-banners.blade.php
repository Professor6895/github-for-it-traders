@if (isset($banners['offer-banner']))
    <section class="collection-banner section-pt-space">
        <div class="custom-container">
            <div class="row collection collection-layout1">
                @foreach ($banners['offer-banner'] as $offer_banner)
                    @switch($loop->iteration)
                        @case(1)
                            @php $class= 'col-md-4 offset-xl-2 p-r-md-0' @endphp
                        @break

                        @case(2)
                            @php $class= 'col-md-4 col-4' @endphp

                        @break

                        @default
                            @php $class= 'col-md-2  pl-md-0' @endphp

                    @endswitch
                    @if ($loop->iteration <= 3)
                        <div class="{{ $class }} {{ $loop->iteration === 3 ? 'd-none d-lg-block' : '' }}">
                            <div class="collection-banner-main p-left">
                                <div class="collecti-img">
                                    <a href="{{ $offer_banner['link'] ? $offer_banner['link'] : 'javascript:void(0)' }}">
                                        <img src="{{ $offer_banner['banner_image']['thumb'] }}" class="w-full"
                                            loading="lazy" alt="Offer Banner"></a>
                                </div>
                            </div>
                        </div>
                    @endif
                @endforeach
            </div>
        </div>
    </section>
@endif
