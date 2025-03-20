@extends('packages.core.website.profile.profile-master')

@section('profile-content')
    <div class="dashboard-right p-4">
        <div class="dashboard">
            <div class="page-title">
              <h4>Personal Information</h4>
          </div>
            <form action="{{ route('website.user-profile.post') }}" method="POST">
              {!! csrf_field() !!}
              <div class="">
                  <label for="">Full Name</label>
                  <input type="text" class="form-control" name="name" required value="{{ $user->name }}">
                  @if ($errors->has('name'))
                      <span class="invalid-feedback float-left d-block mb-2">
                          <strong>{{ $errors->first('name') }}</strong>
                      </span>
                  @endif
              </div>
          
              <div class="row">
                  <div class="col-sm-6">
                      <label for="">Email Address</label>
                      <input type="email" name="email" id="email-address" class="form-control" required
                          value="{{ $user->email }}">
                      @if ($errors->has('email'))
                          <span class="invalid-feedback float-left d-block mb-2">
                              <strong>{{ $errors->first('email') }}</strong>
                          </span>
                      @endif
                  </div>
                  <div class="col-sm-6">
                      <label for="">Contact Number</label>
                      <input type="text" name="contact_number" id="contact-number" class="form-control"
                          required value="{{ $user->contact_number }}">
                      @if ($errors->has('contact_number'))
                          <span class="invalid-feedback float-left d-block mb-2">
                              <strong>{{ $errors->first('contact_number') }}</strong>
                          </span>
                      @endif
                  </div>
              </div>
              <div class="form-group">
                  <label for="">Address</label>
                  <textarea name="address" id="address" cols="30" rows="3" class="form-control"
                      required>{{ $user->address }}</textarea>
                  @if ($errors->has('address'))
                      <span class="invalid-feedback float-left d-block mb-2">
                          <strong>{{ $errors->first('address') }}</strong>
                      </span>
                  @endif
              </div>
          
              <div class="row">
                  <div class="col-sm-12">
                      <label for="">Date of Birth</label>
                      <input type="date" name="date_of_birth" id="date-of-birth" class="form-control" required
                          value="{{ $user->date_of_birth }}">
                      @if ($errors->has('date_of_birth'))
                          <span class="invalid-feedback float-left d-block mb-2">
                              <strong>{{ $errors->first('date_of_birth') }}</strong>
                          </span>
                      @endif
                  </div>
              </div>
          
              <div class="row">
                  <div class="col-sm-12">
                      <button class="text-right btn btn-outline-primary btn-rounded" type="submit">Save</button>
                  </div>
              </div>
          </form>
        </div>
    </div>
@endsection
