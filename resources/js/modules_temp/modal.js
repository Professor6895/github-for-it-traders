(function ($) {
    "use strict";
    $(window).on('load', function() {
        // $('#cart_side').toggleClass('open-side')
    });
   
    function openSearch() {
        document.getElementById("search-overlay").style.display = "block";
    }

    function closeSearch() {
        document.getElementById("search-overlay").style.display = "none";
    }

})(jQuery);

function dismiss() {
    document.getElementById('dismiss').style.display = 'none';
};