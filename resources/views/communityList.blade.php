@extends('master')

@section('content')
<div class="container">
	<div class="row">
		<div class="col-md-10 col-md-offset-1">
			<div class="panel panel-default">
				<div class="panel-heading">Home</div>
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
				@if(Session::has('message'))
				    <div class="alert alert-success">
				        <h2>{{ Session::get('message') }}</h2>
				    </div>
				@endif
				<div class="panel-body">
					<table id="communityList" class="bordered-table zebra-striped dataTable no-footer">
						<thead>
							<th>Community</th>
							<th>Logo</th>
							<th>Created</th>
							<th>Organization</th>
							<th>Active Status</th>
						</thead>
						<tbody>
						</tbody>
					</table>
				</div>
				<script>
					var communities = {!! $communityList !!};
				</script>
			</div>
		</div>
	</div>
</div>
@endsection
