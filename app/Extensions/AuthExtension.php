<?php namespace App\Extensions;


use App\EhacAdmin;
use App\CommunityAdmin;
use DB;
use Illuminate\Auth\Guard;
use Cookie;
use Session;

class AuthExtension extends Guard{
    public function admin(){
        $user = $this->user();
        $adminSearch = EhacAdmin::where('UserID','=',$user->ID)->first();
        $admin = false;
        if($adminSearch)
        {
        	$admin = true;
        }     	
        return $admin;
    }
    public function communityAdmin()
    {
    	$user= $this->user();
    	$communityAdminSearch = DB::table('CommunityAdmins')->join('Communities','Communities.ID','=','CommunityAdmins.CommunityID')->where('UserID','=',$user->ID)->get();
    	$communityAdmin = false;
    	if($communityAdminSearch)
    	{
    		$communityAdmin = $communityAdminSearch;
    	}
    	return $communityAdmin;
    }


        /**
     * Attempt to authenticate a user using the given credentials.
     *
     * @param  array  $credentials
     * @param  bool   $remember
     * @param  bool   $login
     * @return bool
     */
    public function attempt(array $credentials = [], $remember = false, $login = true)
    {

        $this->fireAttemptEvent($credentials, $remember, $login);

        $this->lastAttempted = $user = $this->provider->retrieveByCredentials($credentials);

        // dd($this->provider->retrieveByCredentials($credentials));
        // If an implementation of UserInterface was returned, we'll ask the provider
        // to validate the user against the given credentials, and if they are in
        // fact valid we'll log the users into the application and return true.
        if ($this->hasValidCredentials($user, $credentials))
        {
            if ($login) $this->login($user, $remember);

            return true;
        }

        return false;
    }

        /**
     * Retrieve a user by the given credentials.
     *
     * @param  array  $credentials
     * @return \Illuminate\Contracts\Auth\Authenticatable|null
     */
    public function retrieveByCredentials(array $credentials)
    {
        // First we will add each credential element to the query as a where clause.
        // Then we can execute the query and, if we found a user, return it in a
        // Eloquent User "model" that will be utilized by the Guard instances.
        $query = $this->createModel()->newQuery();

        foreach ($credentials as $key => $value)
        {
            if ( ! str_contains($key, 'password')) $query->where($key, $value);
        }

        return $query->first();
    }

        /**
     * Log the user out of the application.
     *
     * @return void
     */
    public function logout()
    {
        $user = $this->user();

        // If we have an event dispatcher instance, we can fire off the logout event
        // so any further processing can be done. This allows the developer to be
        // listening for anytime a user signs out of this application manually.
        $this->clearUserDataFromStorage();

        if ( ! is_null($this->user))
        {
            $this->refreshRememberToken($user);
        }

        if (isset($this->events))
        {
            $this->events->fire('auth.logout', [$user]);
        }

        // Once we have fired the logout event we will clear the users out of memory
        // so they are no longer available as the user is no longer considered as
        // being signed into this application and should not be available here.
        $this->user = null;

        $this->loggedOut = true;

        $Session = Session::all();
        foreach($Session as $key => $value)
        {
            if($key !== "_previous" || $key !== "flash") Session::forget($key);
        }

    }


}