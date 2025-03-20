<table>
    <thead>
        <tr>
            <th>title</th>
            <th>slug</th>
            <th>sku</th>
            <th>categories</th>
            <th>brand</th>
            <th>description</th>
            <th>price</th>
            <th>compare_price</th>
            <th>quantity</th>
            <th>images</th>
            <th>meta_title</th>
            <th>meta_keywords</th>
            <th>meta_description</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($products as $product)
            @php
                $media_urls = [];
                foreach ($product->getMedia() as $media) {
                    $media_urls[] = $media->getUrl();
                }
            @endphp
            <tr>
                <td>{{ $product->name }}</td>
                <td>{{ $product->slug }}</td>
                <td>
                    {{ $product->sku }}
                </td>
                <td>{{ implode(',',$product->categories()->pluck('slug')->toArray()) }}</td>
                <td>{{ $product->brand ? $product->brand->name : '' }}</td>
                <td>{{ $product->description }}</td>
                <td>{{ $product->price }}</td>
                <td>{{ $product->original_price }}</td>
                <td>{{ $product->quantity }}</td>
                <td>{{ implode(',', $media_urls) }}</td>
                <td>{{ $product->meta_title }}</td>
                <td>{{ $product->meta_keywords }}</td>
                <td>{{ $product->meta_description }}</td>
            </tr>
        @endforeach
    </tbody>
</table>
