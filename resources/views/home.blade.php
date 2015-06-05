@extends('master')

@section('content')
<div class="container">
	<div class="row">
		<div class="col-md-10 col-md-offset-1">
			<div class="panel panel-default">
				<div class="panel-heading">Home</div>

				<div class="panel-body">
					Welcome, {{ $User->FirstName }},
					<br/> 
					<ul>
						<li><a href="Classroom/launch-course.php?ID=42">Start Course</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection
