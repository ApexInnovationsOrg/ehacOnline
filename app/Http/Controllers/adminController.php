<?php namespace App\Http\Controllers;


use Auth;
use DB;
use Validator;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Services\TinyPNG;
use App\Communities;
use App\Organization;
use Illuminate\Http\Request as HttpRequest;
use Storage;
use File;
use Image;
use Response;

class adminController extends Controller {


	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		$this->middleware('admin');
	}

	public function communities()
	{
		return 'communities';
	}

	public function addCommunity()
	{
		return view('addCommunity');
	}

	public function postAddCommunity(HttpRequest $request)
	{

		$user = Auth::user();
		$v = Validator::make($request->all(), [
			'communityName' => 'required|unique:Communities,Name|alpha',
			'logoUpload' => 'required|image|mimes:png',
			'orgID' => 'integer|exists:Organizations,ID'
		]);


		
		if($v->fails())
		{

			return redirect()->back()->withInput()->withErrors($v->errors());
		}
		else
		{
			//compress and resize the image automatically
			$file = $request->file('logoUpload');
			$tinyPng = new TinyPNG('NJzPkYbMKcQNhTpputkaWw0uQbW7vWUe');

			$image = Image::make(File::get($file))->resize(660,null,function ($constraint) {
			    $constraint->aspectRatio();
			})->encode('png');
			if($tinyPng->shrink($image->encoded,true))
			{
				$response = json_decode($tinyPng->getResult());
				$downloadURL = $response->output->url;
			}
			
			
			//after compression and resizing, download the file to the filesyste in /public/images/logos/$communityName
			//20170503EM why not use a CDN instead?
			// Storage::disk('logos')->put($request->communityName . '.png', file_get_contents($downloadURL));
			Storage::disk('rackspace')->put($request->communityName . '.png', file_get_contents($downloadURL));
			
			$community = new Communities;
			$community->name = strtolower($request->communityName);
			$community->Fullname = $request->fullName;
			$community->OrganizationID = $request->orgID;
			$community->Active = 'Y';
			$community->LogoURL = env('CDN_PREFIX') . $request->communityName . '.png';

			$community->save();
			
			return redirect('/admin')->with('message','Successfully created ' . $community->FullName);
		}	
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function orgListJSON(HttpRequest $request)
	{
		$searchTerm = urldecode($request->search);
		$orgs = Organization::where('Name', 'LIKE', '%' . $searchTerm . '%')->orWhere('ID', '=', $searchTerm)->orderBy('Name','ASC')->get();
		
		$response = [];
		foreach($orgs as $org)
		{
			$response[] = [
				'ID'=>$org->ID,
				'value'=>$org->Name . ' :: ' . $org->ID
			];
		}
		return response()->json($response);
	}

	public function postEditCommunity(HttpRequest $request)
	{
		
		$user = Auth::user();
		$v = Validator::make($request->all(), [
			'communityName' => 'required|alpha',
			'ID' => 'required|numeric',
			'orgID' => 'integer|exists:Organizations,ID'
		]);


		
		if($v->fails())
		{

			return redirect()->back()->withInput()->withErrors($v->errors());
		}
		else
		{

			//compress and resize the image automatically
			$file = $request->file('logoUpload');
			$community = Communities::where('ID','=',$request->ID)->first();
			$community->Name = strtolower($request->communityName);
			$community->OrganizationID = $request->orgID;

			if($file !== null)
			{
				$tinyPng = new TinyPNG('NJzPkYbMKcQNhTpputkaWw0uQbW7vWUe');

				$image = Image::make(File::get($file))->resize(660,null,function ($constraint) {
				    $constraint->aspectRatio();
				})->encode('png');
				if($tinyPng->shrink($image->encoded,true))
				{
					$response = json_decode($tinyPng->getResult());
					$downloadURL = $response->output->url;
				}
			
				
				//after compression and resizing, download the file to the filesyste in /public/images/logos/$communityName
				$file = Storage::disk('rackspace')->put($request->communityName . '.png', file_get_contents($downloadURL));

				$community->LogoURL = env('CDN_PREFIX') . $request->communityName . '.png';
			}

			if($request->fullName !== '')
			{
				$community->FullName = $request->fullName;
			}
			if($request->has('active'))
			{
				$community->Active = 'Y';
			}
			else
			{
				$community->Active = 'N';	
			}
			$community->save();
			
			
			return redirect('/admin')->with('message','Successfully updated ' . (!empty($community->FullName) ? $community->FullName : $community->Name));
		}	
	}

	public function communityList()
	{
		//this will get slower over time....
		$communities = Communities::select('Communities.*','Organizations.Name AS OrgName')->where('Communities.ID','>',1)->orderBy('Communities.Name','desc')->leftJoin('Organizations','Communities.OrganizationID','=','Organizations.ID')->get();

			foreach($communities as $community)
			{
				$response[] = [
					'community'=>"<span style='display:none'>" . $community->Name . "</span><a href=" . url("admin/showCommunity/$community->Name") .">" . ($community->FullName === null  ? $community->Name : $community->FullName) . "</a>",
					'logo'=>$community->LogoURL == null ? '' : "<img style='max-height:100px;max-width:100px;text-align:center;' src='" . $community->LogoURL ."' />",
					'organization'=>empty($community->OrgName) ? '' : $community->OrgName,
					'created' => (string)$community->created_at,
					'activeStatus' => $community->Active
				];
			}
		$formattedCommunities = json_encode($response);

		return view('communityList',['communityList'=>$formattedCommunities]);
	}	
	public function showCommunity($community = null)
	{
			$communityInfo = Communities::where('Name','=',$community)->first();
			$org = Organization::where('ID',$communityInfo->OrganizationID)->first();
		   return view('showCommunity',['community'=>$communityInfo,'org'=>$org]);
	}
	public function reports()
	{
		return redirect('/admin')->withErrors(['Not built'=>'Reporting tools have not been built yet']);
	}
}
