<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model {

	//
	protected $table = 'Employees';
	public $timestamps = false;
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['ID','FirstName','LastName', 'Email', 'Password'];

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = ['Password','remember_token'];
	protected $primaryKey = 'ID';
}
