<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class EhacAdmin extends Model {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'EhacAdmins';
    protected $primaryKey = 'ID';
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'UserID'
	];

}
