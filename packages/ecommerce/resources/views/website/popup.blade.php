@if ($settings['ecommerce']['initial_popup']['enabled'])
    <div class="modal fade bd-example-modal-lg theme-modal" id="intialPopupModal" tabindex="-1" role="dialog"
        aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body p-0">
                     
                </div>
            </div>
        </div>
    </div>
    @push('js')
        <script>
            (async () => {
                while ('undefined' == typeof window.jQuery) {
                    await new Promise(resolve => setTimeout(resolve, 1000));
                }

                let popup_settings = {!! json_encode($settings['ecommerce']['initial_popup']) !!};
                if (popup_settings.interval !== 'everytime') {
                    let initial_popup_shown = getCookie('initial_popup_shown')
                    if (!initial_popup_shown) {
                        setCookie('initial_popup_shown', 'true', popup_settings.interval);
                        showInitialPopup(popup_settings)
                    }
                } else {
                    showInitialPopup(popup_settings)
                }
            })();

            function showInitialPopup(popup_settings) {
                setTimeout(function() {
                    $('#intialPopupModal').find('.modal-body').html(`<a href="${popup_settings.link}"><img src="${popup_settings.image}" class="w-full"></a>`)
                    $('#intialPopupModal').modal('show');
                }, popup_settings.popup_delay * 1000)
            }

            function setCookie(cname, cvalue, timeInMinutes) {
                const d = new Date();
                d.setTime(d.getTime() + (timeInMinutes * 60 * 1000));
                let expires = "expires=" + d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            }

            function getCookie(name) {
                const value = `; ${document.cookie}`;
                const parts = value.split(`; ${name}=`);
                if (parts.length === 2) return parts.pop().split(';').shift();
            }
        </script>
    @endpush
@endif
