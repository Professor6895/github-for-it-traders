@extends('packages.core.website.profile.profile-master')

@section('profile-content')
    <div class="dashboard-right">
        <div class="dashboard p-4">
            {{-- <div class="page-title">
                <h2>My Dashboard</h2>
            </div>
            <div class="welcome-msg">
                <p>Hello, MARK JECNO !</p>
                <p>From your My Account Dashboard you have the ability to view a snapshot of your recent
                    account activity and update your account information. Select a link below to view or
                    edit information.</p>
            </div>
            <div class="box-account box-info">

                <div class="row">
                    <div class="col-sm-6">
                        <div class="box">
                            <div class="box-title">
                                <h3>Contact Information</h3><a href="javascript:void(0)">Edit</a>
                            </div>
                            <div class="box-content">
                                <h6>MARK JECNO</h6>
                                <h6>MARk-JECNO@gmail.com</h6>
                                <h6><a href="javascript:void(0)">Change Password</a></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="box">
                            <div class="box-title">
                                <h3>Newsletters</h3><a href="javascript:void(0)">Edit</a>
                            </div>
                            <div class="box-content">
                                <p>You are currently not subscribed to any newsletter.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="box">
                        <div class="box-title">
                            <h3>Address Book</h3><a href="javascript:void(0)">Manage Addresses</a>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <h6>Default Billing Address</h6>
                                <address>You have not set a default billing address.<br><a href="javascript:void(0)">Edit
                                        Address</a></address>
                            </div>
                            <div class="col-sm-6">
                                <h6>Default Shipping Address</h6>
                                <address>You have not set a default shipping address.<br><a href="javascript:void(0)">Edit
                                        Address</a></address>
                            </div>
                        </div>
                    </div>
                </div>
            </div> --}}
            <div class="page-title">
                <h4>Change your password</h4>
            </div>
            <form action="{{ route('website.user-security.post') }}" method="POST">
                {!! csrf_field() !!}
                <div class="mb-3">
                    <label for="">Current Password</label>
                    <input type="password" class="form-control" name="current_password" required>
                    @if ($errors->has('current_password'))
                        <span class="invalid-feedback float-left d-block mb-2">
                            <strong>{{ $errors->first('current_password') }}</strong>
                        </span>
                    @endif
                </div>
                <div class="mb-3">
                    <label for="">New Password</label>
                    <input type="password" class="form-control" name="password" required>
                    @if ($errors->has('password'))
                        <span class="invalid-feedback float-left d-block mb-2">
                            <strong>{{ $errors->first('password') }}</strong>
                        </span>
                    @endif
                </div>
                <div class="mb-3">
                    <label for="">Confirm Password</label>
                    <input type="password" class="form-control" name="password_confirmation" required>
                    @if ($errors->has('password_confirmation'))
                        <span class="invalid-feedback float-left d-block mb-2">
                            <strong>{{ $errors->first('password_confirmation') }}</strong>
                        </span>
                    @endif
                </div>

                <div class="row mt-4">
                    <div class="col-sm-12">
                        <button class="btn cart-btn btn-normal tooltip-top" type="submit"><i class="fa fa-save"></i>&nbsp;Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection
