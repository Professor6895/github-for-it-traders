@extends('packages.core.website.layouts.master')

@section('content')
    <div class="page-content pb-0 mt-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mb-2 mb-lg-0">
                    <h2 class="font-25 text-theme">Don't be a stranger</h3>
                        <h3>Say Hello!</h3>

                        <p class="mt-3 font-20">
                            Contact us with any questions or inquires in your mind. We would be more than happy to answer
                            your
                            questions.
                        </p>
                        <p class="mt-5" style="font-size: 20px"><strong>You can say hello directly at</strong></p>
                        <p style="font-size: 18px"><a
                                href="mailto:{{ $settings['core']['email'] }}">{{ $settings['core']['email'] }}</a></p>
                        <p class="mt-2"><strong>OR, </strong>you can follow us at</p>
                        <div class=" my-auto  mt-2">
                            <a href="{{ $settings['core']['social_facebook'] }}" target="_blank"
                                class="text-decoration-none d-inline-block">
                                <img src="{{ asset('website/images/facebook.png') }}" alt="" style="width: 40px">
                            </a>
                            <a href="{{ $settings['core']['social_instagram'] }}" target="_blank"
                                class="ml-3 text-decoration-none d-inline-block">
                                <img src="{{ asset('website/images/instagram.png') }}" alt="" style="width: 40px">
                            </a>
                            <a href="{{ $settings['core']['social_youtube'] }}" target="_blank"
                                class="ml-3 text-decoration-none d-inline-block">
                                <img src="{{ asset('website/images/youtube.png') }}" alt="" style="width: 40px">
                            </a>
                        </div>

                </div><!-- End .col-lg-6 -->
                <div class="col-lg-6">
                    <h2 class="title mb-1">Contact Us</h2><!-- End .title mb-2 -->
                    <p class="mb-2">Use the form below to get in touch with the sales team</p>

                    <form method="POST" class="contact-form mb-3" id="form--contact-us">
                        @csrf
                        <div class="row">
                            <div class="col-sm-6">
                                <label for="cname" class="sr-only">Name</label>
                                <input type="text" placeholder="Your name" name="name"
                                    class="input-required form-control">
                            </div><!-- End .col-sm-6 -->

                            <div class="col-sm-6">
                                <label for="cemail" class="sr-only">Email</label>
                                <input type="email" placeholder="Email Address.." class="input-required form-control"
                                    name="email">
                            </div><!-- End .col-sm-6 -->
                        </div><!-- End .row -->

                        <div class="row">
                            <div class="col-sm-12">
                                <label for="cphone" class="sr-only">Phone</label>
                                <input type="text" placeholder="Contact Number" class="input-required form-control"
                                    name="contact">
                            </div><!-- End .col-sm-6 -->
                        </div><!-- End .row -->

                        <div class="row">
                            <div class="col-sm-12">
                                <label for="csubject" class="sr-only">Subject</label>
                                <input type="text" placeholder="Subject" class="input-required form-control"
                                    name="subject">
                            </div><!-- End .col-sm-6 -->
                        </div>
                        <label for="cmessage" class="sr-only">Message</label>
                        <textarea placeholder="Message..." class="input-required form-control" name="message"></textarea>
                        <div id="contact-message" class="d-none alert mt-2 mb-2"></div>

                        <button type="submit" class="btn btn-outline-primary-2 btn-minwidth-sm">
                            <span>SUBMIT</span>
                            <i class="icon-long-arrow-right"></i>
                        </button>
                    </form><!-- End .contact-form -->
                </div><!-- End .col-lg-6 -->
            </div><!-- End .row -->
        </div><!-- End .container -->
        <div id="map">
            {!! $settings['custom_scripts']['g_map'] !!}
        </div><!-- End #map -->
    </div><!-- End .page-content -->
@endsection

@push('js')
    <script>
        window.onload = function() {
            var contactForm = $('#form--contact-us'),
                message = $('#contact-message');

            contactForm.submit(function(e) {
                e.preventDefault();
                var submit_btn = contactForm.find('.btn');
                var btn_text = submit_btn.html();
                submit_btn.attr('disabled', true).addClass('btn-disabled');
                submit_btn.html('Sending...')
                var has_error = false
                contactForm.find('.input-required').each(function() {
                    if ($(this).val() == '' || $(this).val() == null) {
                        $(this).addClass('is-invalid')
                        has_error = true;
                    } else {
                        $(this).removeClass('is-invalid');
                    }
                })
                if (has_error) {
                    submit_btn.removeAttr('disabled').removeClass('btn-disabled').html(btn_text);
                    message.removeClass('d-none')
                    message.hide().removeClass('alert-success').removeClass('alert-danger').addClass(
                            'alert-danger')
                        .html('All fields are required.').fadeIn('slow').delay(3000).fadeOut('slow');
                } else {
                    let form_data = convertFormToJSON('#form--contact-us');

                    $.ajax({
                        url: '/contact-us',
                        type: 'POST',
                        data: form_data,
                        dataType: "json",
                        success: function(data) {
                            if (data.success == true) {
                                // contactForm.find(
                                //         'input[type=text],input[type=email],textarea,select')
                                //     .filter(':visible').val('');
                                message.hide().removeClass('alert-success').removeClass(
                                        'alert-danger').removeClass('d-none')
                                    .addClass('alert-success').html(data.message).fadeIn('slow')
                                    .delay(3000)
                                    .fadeOut('slow');
                                contactForm.trigger('reset')
                            }
                        },
                        error: function(data) {},
                        complete: function() {
                            submit_btn.removeAttr('disabled').removeClass('btn-disabled').html(
                                btn_text);
                        }
                    })
                }
            });


            function convertFormToJSON(form) {
                return $(form)
                    .serializeArray()
                    .reduce(function(json, {
                        name,
                        value
                    }) {
                        json[name] = value;
                        return json;
                    }, {});
            }
        }
    </script>
@endpush
