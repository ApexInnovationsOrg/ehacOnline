<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>EHAC Online</title>

	<link href="/css/app.css" rel="stylesheet">
	<link href="/assets/stylesheets/backend.css" rel='stylesheet' type='text/css'>
	<!-- Fonts -->
	<link href='//fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'>

	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>
<body>
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle Navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">EHAC Online</a>
			</div>

			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav navbar-right">
					@if (Auth::guest())
						<li><a href="/login/facebook">Login</a></li>
						<li><a href="/login/facebook">Register</a></li>
					@else
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">{{ Auth::user()->FirstName . ' ' . Auth::user()->LastName }} <span class="caret"></span></a>
							<ul class="dropdown-menu" role="menu">
								@if(Auth::admin())
									<li><a href="/admin/addCommunity">Add Community</a></li>
									<li><a href="/admin/communityList">Community List</a></li>
									<li><a href="/admin/reports">Run Reports</a></li>
								@endif
								<li><a href="/auth/logout">Logout</a></li>
							</ul>
		
						</li>
						@if(Auth::communityAdmin())
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="true">Administer Communities<span class="caret"></span></a>
								<ul class="dropdown-menu" role="menu">
									@foreach(Auth::communityAdmin() as $community)
										<li><a href="/communityAdmin/{{ $community->Name }}">{{ ucwords($community->Name) }}</a></li>
									@endforeach
								</ul>
							</li>
						@endif
					@endif
				</ul>
			</div>
		</div>
	</nav>

	<!-- Scripts -->
	<script src="/assets/javascript/backend.js"></script>
	@yield('content')

</body>
</html>
