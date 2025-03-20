<script>
    window.onload = function() {
        // $('.website--cart-toggler').trigger("click");btn--remove-from-compare
        $(document).on('click', '.btn--remove-from-compare', async function() {
            let product_id = $(this).data('product-id');
            let response = await axios.post('/ajax/product/remove-from-compare', {
                product_id: product_id
            });
            if (response.data.success) {
                location.reload();
            }
        })
        $(document).on('click', '.product--add-to-compare', async function() {
            let product_id = $(this).data('product-id');
            let response = await axios.post('/ajax/product/set-to-compare', {
                product_id: product_id
            });

            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    text: response.data.message,
                    confirmButtonColor: '#ff6000',
                    showCancelButton: true,
                    cancelButtonText: 'View Compares',
                    cancelButtonColor: '#0f67b2'
                }).then((result) => {
                    if (!result.isConfirmed) {
                        window.location.href = '/compare-products'
                    }
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    text: response.data.message,
                    confirmButtonColor: '#ff6000',
                    showCancelButton: true,
                    cancelButtonText: 'View Compares',
                    cancelButtonColor: '#0f67b2'
                }).then((result) => {
                    if (!result.isConfirmed) {
                        window.location.href = '/compare-products'
                    }
                })
            }
        });

        $(document).on('click', '.product--add-to-wishlist', async function() {
                @guest
                Swal.fire({
                    icon: 'warning',
                    text: "Please login first!!",
                    confirmButtonColor: '#ff6000',
                    showCancelButton: true,
                    cancelButtonText: 'Cancel',
                    cancelButtonColor: '#0f67b2'
                }).then((result) => {
                    if (result.isConfirmed) {
                        $('.website--login-toggler').trigger('click')
                    }
                })
                return;
            @endguest

            let product_id = $(this).data('product-id');
            let response = await axios.post('/api/product/add-to-wishlist', {
                product_id: product_id
            });

            if (response.data.success) {
                if (response.data.count)
                    $('.wishlist--product-counts').html(response.data.count)
                Swal.fire({
                    icon: 'success',
                    text: response.data.message,
                    confirmButtonColor: '#ff6000',
                    showCancelButton: true,
                    cancelButtonText: 'View Wishlist',
                    cancelButtonColor: '#0f67b2'
                }).then((result) => {
                    if (!result.isConfirmed) {
                        window.location.href = '/wishlist'
                    }
                })
            }
        });

    $(document).on('click', '.remove-from-wishlist', async function() {
        let wishlist_id = $(this).data('wishlist-id');
        let response = await axios.post('/api/product/remove-from-wishlist', {
            id: wishlist_id
        });

        if (response.data.success) {
            window.location.href = '/wishlist'
        }
    });

    $(document).on('click', '.product--variant-handle', async function() {
        let variant = $(this).data('variant');
        $(`.variant-${variant}`).not(this).removeClass('active')
        $(this).addClass('active')

        // let value = $(this).data('variant-value');
        // let price = 0.00;
        let product_id = $(this).data('product-id')
        let attributes = {};
        $('.product--variant-handle.active').each(function() {
            attributes[$(this).data('variant')] = $(this).data('variant-value')
        })
        attributes = JSON.stringify(attributes);
        let response = await axios.post(`/api/product/${product_id}/get-variation-price`, {
            attributes: attributes
        });
        if (response.data.success) {
            let price_html = `Rs. ${response.data.discounted_price}`;
            if (response.data.org_price >0) {
                price_html += `<div class="check-price ml-4"> <strike><span class="old-price">Rs. ${response.data.org_price}</span></strike>`
            }
          
            $('.product-detail--price').html(price_html)

            if (response.data.quantity == 0) {
                $('.product_stock_message').html("Out of Stock");
            } else{
                $('.product_stock_message').html('');
            }
        } else {
            Swal.fire({
                    icon: 'error',
                    text: response.data.message,
                    confirmButtonColor: '#FF0000',
                }).then((result) => {
                        // window.location.reload()
                })
        }
    })
    let variant_selector = $('.product--variant-handle').length;
    if (variant_selector > 0) {
        $('.product--variant-handle').first().trigger('click');
    }

    $('.star--rating').each(function() {
        let rating = $(this).data('rating');
        $(this).rateYo({
            starWidth: "20px",
            halfStar: true,
            rating: rating,
            readOnly: true
        });
    })

    $(document).on('click', '.btn--add-to-cart', async function() {
        let form = $(this).closest('form.form--add-to-cart');
        let form_data = form.serialize();
        let button = $(this);
        button.prop('disabled', true)
        button.html(' <i class="fa fa-shopping-cart"></i>&nbsp;Adding to Cart')
        try {
            let response = await axios.post('/api/product/add-to-cart', form_data);
            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    text: response.data.message,
                    confirmButtonColor: '#FF0000',
                    showCancelButton: true,
                    cancelButtonText: 'View Cart',
                    cancelButtonColor: '#0f67b2'
                }).then((result) => {
                    if (!result.isConfirmed) {
                        window.location.href = '/cart'
                    }
                })

                $(document).trigger('cart-updated');
                $('#quick-view').modal('hide')
            } else {
                Swal.fire({
                    icon: 'error',
                    text: response.data.message,
                })
            }
        } catch (error) {
            console.log("Error while adding to cart");
        } finally {
            button.prop('disabled', false)
            button.html(' <i class="fa fa-shopping-cart"></i>&nbsp; Add to cart')
        }
    })

    $(document).on('click', '.remove--cart-item', function() {
        let form = $(this).closest('form');
        Swal.fire({
            text: "Are you sure you want to delete the cart item?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                form.submit();
            }
        })
    })

    $(".website-product__search").autocomplete({
        minLength: 2,
        appendTo: ".search--data-wrapper",
        source: function(request, response) {
            let category = $('.category-value').val();
            $.ajax({
                url: '/api/product/search',
                data: {
                    keyword: request.term,
                },
                success: function(res) {
                    if (res.success !== true || !Object.keys(res.data).length) {
                        res = {
                            data: {
                                "0": {
                                    text: "No Results Found!!"
                                }
                            }
                        }
                    }
                    response(res.data)
                },
            });
        },
        focus: function(event, ui) {
            return false;
        },
        select: function(event, ui) {
            if (ui.item.slug)
                window.location.href = '/product/' + ui.item.slug;
            else
                return;

        }
    }).autocomplete("instance")._renderItem = function(ul, item) {
        var item_to_render = "";
        // <div class="product-price"> <span class="new-price">Rs. 32333</span>  <div class="check-price ml-2"> <strike><span class="old-price">Rs. 332233</span></strike> </div>  </div>
        if (item.name) {
            let price = "<span class='new-price'>Rs. " + item.price + "</span>";
            if (item.original_price) {
                price += " <span class'check-price ml-2'><strike><small class='old-price'>(Rs. " + item
                    .original_price + ")</small><strike></div>";
            }
            // price += "</div>"
            let category_text = "";
            if (item.categories.length) {
                category_text = `in <strong> ${item.categories[0].title}</strong>`
            }

            let text_to_append =
                `<div class="each--search-item"><img src="${item.product_image.thumb}" /> <p class="product--description"> ${item.name} ${category_text}  <br><br>${price} </p></div>`

            item_to_render = $("<li>")
                .append(text_to_append)
                .appendTo(ul);
        } else {
            item_to_render = $("<li>")
                .append(`<div class="text-center"><a>  ${item.text} </a></div>`)
                .appendTo(ul);
        }
        return item_to_render;
    };

    // $(".website-product__search-mobile").autocomplete({
    //     minLength: 2,
    //     appendTo: ".search--data-wrapper-mobile",
    //     source: function(request, response) {
    //         let category = $('.category-value').val();
    //         $.ajax({
    //             url: '/api/product/search',
    //             data: {
    //                 keyword: request.term,
    //             },
    //             success: function(res) {
    //                 if (res.success !== true || !Object.keys(res.data).length) {
    //                     res = {
    //                         data: {
    //                             "0": {
    //                                 text: "No Results Found!!"
    //                             }
    //                         }
    //                     }
    //                 }
    //                 response(res.data)
    //             },
    //         });
    //     },
    //     focus: function(event, ui) {
    //         return false;
    //     },
    //     select: function(event, ui) {
    //         if (ui.item.slug)
    //             window.location.href = '/product-detail/' + ui.item.slug;
    //         else
    //             return;

    //     }
    // }).autocomplete("instance")._renderItem = function(ul, item) {
    //     var item_to_render = "";

    //     if (item.name) {

    //         let price = "<small class='product-price'>Rs. " + item.price + "</small>";
    //         if (item.price === 0) {
    //             price = "<small class='product-price'>Coming Soon</small>";
    //         }
    //         if (item.original_price) {
    //             price += " <small class='product-org-price'>(Rs. " + item.original_price + ")</small>";
    //         }

    //         let category_text = "";
    //         if (item.categories.length) {
    //             category_text = `in <strong> ${item.categories[0].title}</strong>`
    //         }

    //         let text_to_append =
    //             `<div class="each--search-item"><img src="${item.product_image.thumb}" /> <p class="product--description"> ${item.name} ${category_text} <br> ${price} </p></div>`
    //         item_to_render = $("<li>")
    //             .append(text_to_append)
    //             .appendTo(ul);
    //     } else {
    //         item_to_render = $("<li>")
    //             .append(`<div class="text-center"><a>  ${item.text} </a></div>`)
    //             .appendTo(ul);
    //     }
    //     return item_to_render;
    // };

    let elevatezoomconfig = {
        easing: true,
        cursor: "crosshair",
        scrollZoom: true,
        zoomWindowWidth: 500,
        zoomWindowHeight: 500
    }
    if ($('.image_zoom_cls-0').length) {
        $('.image_zoom_cls-0').elevateZoom(elevatezoomconfig);
    }
    $(document).on('click', '.image--gallery', function(e) {
        let image_id = $(this).data('image-count');
        $(`.image_zoom_cls-${image_id}`).elevateZoom(elevatezoomconfig);

    });
    @if (session('trigger_login'))
        console.log("OPEN")
        $('.website--login-modal').modal('show')
    @endif
    }

    function showProductDesc(product) {
        let modal = $("#productdescmodal")

        modal.find('.product--name').html(product.name)
        modal.find('.product--description').html(product.description)

        $("#productdescmodal").modal('show');
    }
</script>


<style>
    .footer-description--area li {
        display: list-item !important;
        list-style: disc !important;
    }

    .footer-description--area li.ql-indent-1 {
        margin-left: 20px !important;

    }
</style>
