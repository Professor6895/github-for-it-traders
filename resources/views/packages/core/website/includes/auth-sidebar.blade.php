<!-- My account bar start-->
<div id="myAccount" class="add_to_cart right account-bar">
    <a href="javascript:void(0)" class="overlay website--profile-toggler" onclick="closeAccount()"></a>
    <div class="cart-inner">
        <div class="cart_top">
            <h3>my account</h3>
            <div class="close-cart">
                <a href="javascript:void(0)" class="website--profile-toggler">
                    <i class="bi bi-x-circle" aria-hidden="true"></i>
                </a>
            </div>
        </div>
        <ul class="profile--options" style="left: 0px;">
            <li><a href="{{ route('website.user-profile') }}"><i class="bi bi-person font-20"></i> Profile</a></li>
            <li><a href="{{ route('website.user-profile.address-book') }}"><i class="bi bi-journal-text"></i> Address Book</a></li>
            <li><a href="{{ route('website.user-profile.orders-list') }}"><i class="bi bi-basket"></i>orders</a></li>
            <li><a href="{{ route('website.user-security') }}"><i class="bi bi-key"></i>Change password</a></li>
            <li><a href="javascript:void(0)" onclick="event.preventDefault();
                document.getElementById('website-logout-form').submit();"><i class="bi bi-box-arrow-left"></i>logout</a></li>
            <form id="website-logout-form" action="{{ route('website.user-logout') }}" method="POST"
                style="display: none;">
                @csrf
            </form>
        </ul>
    </div>
</div>
<!-- Add to account bar end-->
