<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Organization extends Model {

	//
	protected $table = 'Organizations';
	public $timestamps = false;
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['ID','Name'];

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $primaryKey = 'ID';
}
