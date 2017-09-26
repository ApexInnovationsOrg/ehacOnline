@extends('ehacMaster')

@section('content')

 <div class="site-wrapper">

      <div class="site-wrapper-inner">

        <div class="cover-container">

         
          <div class="inner cover">
            @if (count($errors) > 0)
              <div class="alert alert-danger">
                <strong>Whoops!</strong> There were some problems with your input.<br><br>
                <ul>
                  @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                  @endforeach
                </ul>
              </div>
            @endif

          <!-- Modal -->
          <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 class="modal-title" id="myModalLabel">Login &amp; Register</h4>
                </div>
                <div class="modal-body">
                  <form class="form-horizontal no-shadow" role="form" method="POST" action="/auth/login">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">

                    <div class="form-group">
                      <label class="col-md-4 control-label">E-Mail Address</label>
                      <div class="col-md-6">
                        <input type="email" class="form-control" name="Login" value="{{ old('Login') }}">
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="col-md-4 control-label">Password</label>
                      <div class="col-md-6">
                        <input type="password" class="form-control" name="Password">
                      </div>
                    </div>
            
                    <div class="form-group">
                      <div class="col-md-3 col-md-offset-4">
                        <div class="checkbox">
                          <label>
                            <input type="checkbox" name="remember"> Remember Me
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div class="form-group">
                      <div class="col-md-6 col-md-offset-4">
                        <button type="submit" class="btn btn-primary" style="margin-right: 15px;">
                          Login
                        </button>

                        <a style="color:#337ab7" href="/password/email">Forgot Your Password?</a>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <a class="btn btn-default" href="{{ url('/auth/register') }}">Create Account</a>
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
            <div class="row">
            	<div class="col-md-12 cover-heading"><img src='{{ $logo }}'/></div>
            </div>
            
            <hr class="thickNBlue"/>

            <p class="lead">Early Heart Attack Care Program</p>
            <p class="lead">
              <a href="{{ url('/login/facebook') }}" class="hvr-grow-shadow"><img class="ehacButton" src="images/EHAC_Button.png"/></a>
              <br/>
              <br/>
              <a class="noFacebook hvr-float-shadow"  href="#" data-toggle="modal" data-target="#loginModal">Don't have Facebook?</a>
            </p>
            <p>Powered by:</p>
            <div class="row">
            	<div class="col-md-3"></div>
            	<div class="col-md-6">
		            <a href="//www.apexinnovations.com">
		            	<img class="apexLogo" src='images/apexLogo.png'/>
		            </a>
		        </div>
	            <div class="col-md-3"></div>
	        </div>
          </div>

        </div>

      </div>

    </div>


@stop