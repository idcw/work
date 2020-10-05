import "./db.js";

const Link = ReactRouterDOM.Link,
      Route = ReactRouterDOM.Route;

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

  render() {

    return (
      <ReactRouterDOM.HashRouter>
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
              <Link className="navbar-item" to="/">Home</Link>
              <Link className="navbar-item" to="/dash">Dash</Link>
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
        <Route path="/" exact component={EmployeeTable} />
        <Route path="/dash" component={EmployeePage} />
      </ReactRouterDOM.HashRouter>
    );
  }

}

class EmployeeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {emps: null};
    this.getData();
  }

  getData() {
    // parse request params = turn into props
    var q1 = null;
    var q2 = null;
    /*
    var q1 = $.url().param('q1');
    $('input[name="q1"]').val(q1);
    var q2 = $.url().param('q2');
    $('input[name="q2"]').val(q2);
    */

    // read data from database
    if (q1) {
      console.log("if q1")
    	this.state.emps = alasql('SELECT * FROM emp WHERE number LIKE ?', [ '%' + q1 + '%' ]);
    } else if (q2) {
      console.log("if q2")
    	this.state.emps = alasql('SELECT * FROM emp WHERE name LIKE ?', [ '%' + q2 + '%' ]);
    } else {
      console.log("if nothing")
    	this.state.emps = alasql('SELECT * FROM emp', []);
    }

  }

  render() {
    return (
      <table className="table is-striped" id = "h-table">
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>primary Position</th>
            <th>Start Date</th>
          </tr>
        </thead>
        <tbody id="tbody-emps">
          {this.state.emps.map((emp, i) => (
            <tr key={i}>
              <td><a href="emp.html?id=${emp.id}">{emp.number}</a></td>
              <td>{emp.name}</td>
              <td>{emp.primarypositions}</td>
              <td>{emp.startdate}</td>
            </tr>))
          }
        </tbody>
      </table>
    );
  }
}

class EmployeePage extends React.Component {
  constructor(props) {
    super(props)
  }

  getData() {

  }

  render() {
    return(
      <div>EmployeePage</div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);
