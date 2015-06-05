<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'ehacController@index');
Route::get('login/{provider?}', 'Auth\AuthController@login');
Route::any('fbLogin', 'ehacController@redirectToProvider');
Route::any('loggedOn', 'ehacController@handleProviderCallback');
Route::any('userHasLoggedIn', 'ehacController@handleProviderCallback');
Route::get('/admin','adminController@communityList');
Route::any('orgListJSON','adminController@orgListJSON');
Route::get('/admin/communityList','adminController@communityList');
Route::any('/admin/addCommunity','adminController@addCommunity');
Route::any('/admin/editCommunity','adminController@postEditCommunity');
Route::any('/admin/showCommunity/{community?}','adminController@showCommunity');
Route::any('/admin/postAddCommunity','adminController@postAddCommunity');
Route::get('/admin/reports','adminController@reports');
Route::get('/communityAdmin/{community?}','communityController@index');




Route::get('home', 'HomeController@index');
// Route::get('test', 'HomeController@test');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);
