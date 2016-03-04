<?php namespace App\Http\Controllers;

use Socialize;
use Session;
use App\Communities;

class ehacController extends Controller {

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */

	/**
	 * Show the application welcome screen to the user.
	 *
	 * @return Response
	 */
	public function index()
	{

		$logo = 'apexLogo.png';
		$host = $_SERVER['SERVER_NAME'];
		$subdomain = strstr($host, '.', true);
		Session::set('subdomain','');
		if($subdomain !== 'ehaconline' && $subdomain !== 'www')
		{
			$community = Communities::where('Name','=',$subdomain)->first();
			if($community)
			{
				if($community->Active !== 'Y')
				{
					return redirect('https://ehaconline.com')->withErrors(['Inactive'=>'The community you entered (' . $subdomain . ') is inactive.']);
				}
				$logo = $subdomain . '.png';
				Session::set('subdomain',$subdomain);
			}
			else
			{
				return redirect('https://ehaconline.com')->withErrors(['Invalid Community'=>'The community you entered (' . $subdomain . ') does not exist']);
			}
		}

		return view('ehac',['logo'=>$logo]);
	}
	public function healthcheck()
	{
		return "<marquee>Hello!</marquee>";
	}
}
