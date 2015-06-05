<?php namespace App\Extensions;


use App\EhacAdmin;
use App\CommunityAdmin;
use DB;
use Illuminate\Auth\Passwords\DatabaseTokenRepository;

class DBTokenRepositoryExt extends DatabaseTokenRepository{

    /**
     * Delete all existing reset tokens from the database.
     *
     * @param  \Illuminate\Contracts\Auth\CanResetPassword  $user
     * @return int
     */
    protected function deleteExisting(CanResetPasswordContract $user)
    {
        return $this->getTable()->where('Login', $user->getEmailForPasswordReset())->delete();
    }

    /**
     * Build the record payload for the table.
     *
     * @param  string  $email
     * @param  string  $token
     * @return array
     */
    protected function getPayload($email, $token)
    {
        dd('not etting here');
        return ['Login' => $email, 'token' => $token, 'created_at' => new Carbon];
    }

    /**
     * Determine if a token record exists and is valid.
     *
     * @param  \Illuminate\Contracts\Auth\CanResetPassword  $user
     * @param  string  $token
     * @return bool
     */
    public function exists(CanResetPasswordContract $user, $token)
    {
        $email = $user->getEmailForPasswordReset();

        $token = (array) $this->getTable()->where('Login', $email)->where('token', $token)->first();

        return $token && ! $this->tokenExpired($token);
    }

}