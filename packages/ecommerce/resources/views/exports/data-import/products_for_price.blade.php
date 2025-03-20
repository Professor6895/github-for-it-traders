<table>
    <thead>
        <tr>
            <th>product_id</th>
            <th>name</th>
            <th>sku</th>
            <th>price</th>
            <th>compare_price</th>
            <th>quantity</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($products as $product)
            <tr>
                <td>{{ $product->id }}</td>
                <td>{{ $product->name }}</td>
                <th>{{ $product->sku }}</th>
                <th>{{ $product->price }}</th>
                <th>{{ $product->original_price }}</th>
                <th>{{ $product->quantity }}</th>
            </tr>
        @endforeach
    </tbody>
</table>
