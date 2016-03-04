<?php namespace App\Repositories;

use App\User;
use App\Communities;

class UserRepository {
    public function findByUserNameOrCreate($userData) {
        
        // $user = User::where('provider_id', '=', $userData->id)->first();
        $user = User::where('Login', '=', $userData->user['email'])->first();

        $host = $_SERVER['HTTP_HOST'];
        $subdomainName = (explode(".",$host));
        array_shift($subdomainName);
        $subdomain = strtolower($subdomainName[0]);


            $community = Communities::where('Name','=',$subdomain)->first();
            if(!$community)
            {
                $communityID = 1;
            }
            else
            {
                $communityID = $community->ID;
            }
        
        if(!$user) {
            $user = User::create([
                'provider_id' => $userData->id,
                'FirstName' => $userData->user['first_name'],
                'LastName' => $userData->user['last_name'],
                'Login' => $userData->email,
                'avatar' => $userData->avatar,
                'CreationDate' => date("Y-m-d H:i:s"),
                'LastLoginDate' => date("Y-m-d H:i:s"),
                'Active' => 'Y',
                'CommunityID'=> $communityID
            ]);
        }

        $this->checkIfUserNeedsUpdating($userData, $user, $communityID);
        return $user;
    }

    public function checkIfUserNeedsUpdating($userData, $user, $communityID) {

        $socialData = [
            'avatar' => $userData->avatar,
            'Login' => $userData->email,
            'FirstName' => $userData->user['first_name'],
            'LastName' => $userData->user['last_name'],
           
        ];
        $dbData = [
            'avatar' => $user->avatar,
            'Login' => $user->email,
            'FirstName' => $userData->user['first_name'],
            'LastName' => $userData->user['last_name'],
        ];

        if (!empty(array_diff($socialData, $dbData))) {
            $user->avatar = $userData->avatar;
            $user->Login = $userData->email;
            $user->FirstName = $userData->user['first_name'];
            $user->LastName = $userData->user['last_name'];
            $user->CommunityID = $communityID;
            $user->save();
        }
    }
}