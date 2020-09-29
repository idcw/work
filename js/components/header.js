// create navbar
var headerNav = document.getElementById('header-nav')
headerNav.innerHTML = `
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	  <a class="navbar-brand" href="#">Leave Manager</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav mr-auto">
	      <li class="nav-item active">
	        <a class="nav-link" href="index.html">Personal Info Management <span class="sr-only">(current)</span></a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="dashboard.html">Dashboard</a>
	      </li>

	    </ul>
			<ul class="navbar-nav navbar-right">
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Settings
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="#" onclick="window.location.reload(true)">Reload</a>
						<a class="dropdown-item" href="#" onclick="DB.init()">Init DB</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item" href="#" onclick="DB.remove()">Delete DB</a>
					</div>
				</li>
			</ul>
	  </div>
	</nav>
`
