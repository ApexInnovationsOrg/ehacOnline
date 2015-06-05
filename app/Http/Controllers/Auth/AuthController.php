<?php namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\Auth\Registrar;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;
use Illuminate\Http\Request as Request;
use Session;

class AuthController extends Controller {

	/*
	|--------------------------------------------------------------------------
	| Registration & Login Controller
	|--------------------------------------------------------------------------
	|
	| This controller handles the registration of new users, as well as the
	| authentication of existing users. By default, this controller uses
	| a simple trait to add these behaviors. Why don't you explore it?
	|
	*/

	use AuthenticatesAndRegistersUsers;

	// *
	//  * Create a new authentication controller instance.
	//  *
	//  * @param  \Illuminate\Contracts\Auth\Guard  $auth
	//  * @param  \Illuminate\Contracts\Auth\Registrar  $registrar
	//  * @return void
	 
	public function __construct(Guard $auth, Registrar $registrar)
	{
		$this->auth = $auth;
		$this->registrar = $registrar;

		$this->middleware('guest', ['except' => 'getLogout']);
	}


	/**
	 * Handle a login request to the application.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function postLogin(Request $request)
	{
		$this->validate($request, [
			'Login' => 'required|email', 'Password' => 'required',
		]);

		$credentials = $request->only('Login', 'Password');

		if ($this->auth->attempt($credentials, $request->has('remember')))
		{
			return redirect()->intended($this->redirectPath());
		}

		return redirect($this->loginPath())
					->withInput($request->only('Login', 'remember'))
					->withErrors([
						'Login' => $this->getFailedLoginMessage(),
					]);
	}


    // AuthController.php
    public function login(AuthenticateUser $authenticateUser, Request $request, $provider = null) {
       return $authenticateUser->execute($request->all(), $this, $provider);
    }

    public function userHasLoggedIn($user) {
    	Session::set('userID',$user->ID);
	    Session::flash('message', 'Welcome, ' . $user->FirstName);
	    if(Session::get('subdomain') !== '')
	    { 
	    	return redirect('//' . Session::get('subdomain') . '.ehaconline.com/home');
	    } 
	    else
	    {
	    	return redirect('home');
	    }

	}
}
