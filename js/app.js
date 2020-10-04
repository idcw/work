
class Header2 extends React.Component {
  reload = () =>  {
    window.location.reload(true)
  };

  initDB = () => {
    //DB.init()
  };

  deleteDB = () => {
    //DB.remove()
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    	  <a className="navbar-brand" href="#">Leave Manager</a>
    	  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    	    <span className="navbar-toggler-icon"></span>
    	  </button>

    	  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    	    <ul className="navbar-nav mr-auto">
    	      <li className="nav-item active">
    	        <a className="nav-link" href="index.html">Personal Info Management <span className="sr-only">(current)</span></a>
    	      </li>
    	      <li className="nav-item">
    	        <a className="nav-link" href="dashboard.html">Dashboard</a>
    	      </li>

    	    </ul>
    			<ul className="navbar-nav navbar-right">
    				<li className="nav-item dropdown">
    					<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    						Settings
    					</a>
    					<div className="dropdown-menu" aria-labelledby="navbarDropdown">
    						<a className="dropdown-item" href="#" onClick={this.reload}>Reload</a>
    						<a className="dropdown-item" href="#" onClick={this.initDB}>Init DB</a>
    						<div className="dropdown-divider"></div>
    						<a className="dropdown-item" href="#" onClick={this.deleteDB}>Delete DB</a>
    					</div>
    				</li>
    			</ul>
    	  </div>
    	</nav>
          );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: "list" };
  }

  reload = () =>  {
    window.location.reload(true)
  };

  initDB = () => {
    //DB.init()
  };

  deleteDB = () => {
    //DB.remove()
  };

  handleClick(e) {
    e.preventDefault();
    this.setState({
      // page: !this.state.page
    });
  }

  render() {
    let status;
    switch (this.state.page) {
      case "list":
        content = <EmployeeList></EmployeeList>;
        break;
      case false:
        content = <p>OFF</p>;
        break;
      default:
        content = null;
        break;
    }
    return (
      <div>

        <nav className="navbar" role="navigation" aria-label="main navigation">
      	  <div className="navbar-brand" href="#">
            <a className="navbar-item" href="index.html">Leave Manager</a>
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">
                Home
              </a>

              <a className="navbar-item">
                Dashboard
              </a>


            </div>

            <div className="navbar-end">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  Settings
                </a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">
                    Reload
                  </a>
                  <a className="navbar-item">
                    Init DB
                  </a>
                  <hr className="navbar-divider"></hr>
                  <a className="navbar-item">
                    Delete DB
                  </a>
                </div>
              </div>
            </div>
          </div>
      	</nav>
        <button onClick={this.handleClick.bind(this)}>Toggle</button>
        {content}
      </div>
    );
  }

}

class EmployeeList extends React.Component {

  render() {
    return (
      <div>List</div>
    );
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);
