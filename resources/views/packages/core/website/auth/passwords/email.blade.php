@extends('packages.core.website.layouts.master')

@section('content')
    <div class="main-container container mt-4 mb-4" id="main-container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <div class="card">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="auth--form-area text-center p-5">
                                @if (session('status'))
                                    <div class="alert alert-success" role="alert">
                                        {{ session('status') }}
                                    </div>
                                @endif
                                <h3 class="mb-4">Reset Password</h3>
                                <form class="mt-2 mb-2" method="POST" action="{{ route('password.email') }}">
                                    @csrf
                                    <div class="form-group">
                                        <input id="email" type="email" style="height: 55px" placeholder="Enter your email address"
                                            class="form-control @error('email') is-invalid @enderror" name="email"
                                            value="{{ old('email') }}" required autocomplete="email" autofocus>
                                        @error('email')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-theme">
                                        {{ __('Send Password Reset Link') }}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
