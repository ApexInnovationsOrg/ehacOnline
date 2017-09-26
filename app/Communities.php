<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Communities extends Model {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'Communities';
    protected $primaryKey = 'ID';
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'Name','FullName','Active','OrganizationID','LogoURL'
	];

}
