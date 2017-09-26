@extends('master')

@section('content')
<div class="container">
	<div class="row">
		<div class="col-md-10 col-md-offset-1">
			<div class="panel panel-default">
				<div class="panel-heading">Edit Community</div>
					@if (count($errors) > 0)
						<div class="alert alert-danger">
							<strong>Whoops!</strong> There were some problems with your input.<br><br>
							<ul>
								@foreach ($errors->all() as $error)
									<li>{{ $error }}</li>
								@endforeach
							</ul>
						</div>
					@endif
				<form class="form-horizontal" method="POST" action="{{ url('/admin/editCommunity') }}" enctype="multipart/form-data">
				<fieldset>
				<input type="hidden" name="_token" value="{{ csrf_token() }}">
				<input type="hidden" name="ID" value="{{ $community->ID }}">
				<div class="row">&nbsp;</div>
				<!-- Text input-->
				<div class="form-group">
				  <label class="col-md-4 control-label" for="communityName">Community Name (url)</label>  
				  <div class="col-md-5">
				  <input id="communityName" name="communityName" type="text" placeholder="community" class="form-control input-md" required="" value="{{ isset($community->Name) ? $community->Name : old('communityName') }}">
				  <span class="help-block">ie. https://teche.ehaconline.com</span>  
				  </div>
				</div>
				<!-- Text input-->
				<div class="form-group">
				  <label class="col-md-4 control-label" for="fullName">Full Name</label>  
				  <div class="col-md-5">
				  <input id="fullName" name="fullName" type="text" placeholder="Full Name" class="form-control input-md" value="{{ isset($community->FullName) ? $community->FullName : old('fullName') }}">
				  <span class="help-block">ie. Teche Regional Medical Center</span>  
				  </div>
				</div>
				<!-- Search input-->
				<div class="form-group">
				  <label class="col-md-4 control-label" for="orgSearch" ><img id="loader" class="loader" src="/images/ui-anim_basic_16x16.gif" />&nbsp;&nbsp;Organization</label>
				  <div class="col-md-5">
				    <input id="orgSearch" name="orgSearch" type="search" placeholder="Organization name or ID" class="typeahead tt-query form-control input-md" autocomplete="off" 
				    value="{{ $community->OrganizationID > 0 ? $org->Name . ' :: ' . $org->ID : old('orgSearch') }}" >
				    <input id="orgID" type="hidden" name="orgID" value="{{ $community->OrganizationID > 0 ? $community->OrganizationID : old('OrganizationID') }}">
				    <p class="help-block">Organization Name or ID.</p>
				  </div>
				</div>
				<!-- checkbox input -->
				<div class="form-group">
				  <label class="col-md-4 control-label" for="active">Active</label>
				  <div class="col-md-4">
				    <label class="checkbox-inline" for="active-0">
				      <input type="checkbox" name="active" id="active-0" value="Y" {{ $community->Active === 'Y' ? 'checked' : '' }}>
				      &nbsp;
				    </label>
				  </div>
				</div>
				<!-- File Button --> 
				<div class="form-group">
				  <label class="col-md-4 control-label" for="logoUpload">Community Logo</label>
				  <div class="col-md-4">
					  <img style="max-width:200px; max-height:200px; display:block;" src="{{ $community->LogoURL }}" />
				  </div>
				</div>
				<!-- Image update -->
				<div class="form-group">
					<label class="col-md-4 control-label" for="logoUpload">Update Logo</label>
		            <div class="col-md-4 input-group image-preview">
		                <input type="text" class="form-control image-preview-filename" disabled="disabled"> <!-- don't give a name === doesn't send on POST/GET -->
		                <span class="input-group-btn">
		                    <!-- image-preview-clear button -->
		                    <button type="button" class="btn btn-default image-preview-clear" style="display:none;">
		                        <span class="glyphicon glyphicon-remove"></span> Clear
		                    </button>
		                    <!-- image-preview-input -->
		                    <div class="btn btn-default image-preview-input">
		                        <span class="glyphicon glyphicon-folder-open"></span>
		                        <span class="image-preview-input-title">Browse</span>
		                        <input type="file" accept="image/png" name="logoUpload"/> 
		                    </div>
		                </span>
		            </div>
				</div>
				<!-- Button (Double) -->
				<div class="form-group">
				  <label class="col-md-4 control-label" for="save"></label>
				  <div class="col-md-8">
				    <input type="submit" id="save" name="save" class="btn btn-success" value="Save"></input>

				    <a href="{{ url('/admin') }}" id="cancel" name="cancel" class="btn btn-default">Cancel</a>
				  </div>
				</div>

				</fieldset>
				</form>
			</div>
		</div>
	</div>
</div>
<script>								
	var orgs = new Bloodhound({
	  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
	  queryTokenizer: Bloodhound.tokenizers.whitespace,
	  remote: {
	    url: '/orgListJSON/?search=%QUERY',
	    wildcard: '%QUERY'
	  }
	});
	 
	$('#orgSearch').typeahead(null, {
		limit:25,	
		name: 'Organizations',
		display: 'value',
		source: orgs,
	});

	$('#orgSearch').bind('typeahead:select', function(ev, suggestion) {
	  $('#orgID').val(suggestion['ID']);
	});

	$(document).ajaxSend(function(event, jqXHR, settings) {
	    //Call method to display spinner
	    $('#loader').show();
	});

	$(document).ajaxComplete(function(event, jqXHR, settings) {
	    //Call method to hide spinner
	    $('#loader').hide();
	});
</script>
@endsection
