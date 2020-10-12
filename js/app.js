import "./db.js";

const Link = ReactRouterDOM.Link,
      Route = ReactRouterDOM.Route;

const Root = ({ children }) => (
  <section className="section">
    <div className="container">
      <NavBar />

      {children}
    </div>
  </section>
);

const NavBar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-menu is-mobile">
      <div className="navbar-start">
        <Link to="/" className="button">Requests</Link>
        <Link to="/calendar" className="button">Calendar</Link>
      </div>
    </div>
  </nav>
);

Root.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired
};
      
class IndexRoute extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      requests: []
    };
  }

  componentDidMount() {
    this._isMounted = true;

    fetch(API)
      .then(response => response.json())
      .then(data => {
        if (this._isMounted) {
          this.setState({ requests: data.requests });
        }  
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  removeRequestById = (id) => {
    let { requests } = this.state;

    fetch(`https://api.frontside.io/v1/requests/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(_ => { // eslint-disable-line no-unused-vars
        if (this._isMounted) {
          this.setState({ requests: requests.filter(req => req.id !== id) });
        }
      })
      .catch(response => console.log('Error: ', JSON.stringify(response))); // eslint-disable-line no-console
  }

  render() {
    let { requests } = this.state;
    return (
      <div data-test-index-route>
        <h6 data-test-index-header>
          Requests
        </h6>
        <br />
        <RequestList
          requests={requests}
          removeRequestById={this.removeRequestById}
        />
        <br />
        <Link to="/requests/new">
          <button className="button is-dark" data-test-create-button>
            Create new request
          </button>
        </Link>
      </div>
    );
  }
}

class CalendarRoute extends React.Component {
  static propTypes = {
    date: PropTypes.string,
    navigate: PropTypes.func
  };

  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      requests: []
    };
  }

  componentDidMount() {
    this._isMounted = true;

    fetch('https://api.frontside.io/v1/requests')
      .then(res => res.json())
      .then(data => {
        let requests = data.requests.map(req => ({
          ...req,
          startDate: addOffset(req.startDate),
          endDate: addOffset(req.endDate)
        }));
        if (this._isMounted) {
          this.setState({ requests });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  get date() {
    let { date } = this.props;
    let newDate = date ? moment(date, 'MM-DD-YYYY') : moment();
    return newDate.toDate();
  }

  get events() {
    let { requests } = this.state;

    return requests.map(event => ({
      title: event.owner,
      start: event.startDate,
      end: event.endDate
    }));
  }

  onNavigate = (date) => {
    let formattedDate = moment(date).format('MM-DD-YYYY');
    this.props.navigate(`/calendar/${formattedDate}`);
  }

  render() { 
    return (
      <div data-test-calendar-route>
        <h6>
          Calendar
        </h6>
        <br />
        <Calendar
          events={this.events}
          date={this.date}
          onNavigate={this.onNavigate}
        />
      </div>
    );
  }
}

const localizer = BigCalendar.momentLocalizer(moment);

const allViews = Object.values(BigCalendar.Views);

const Calendar = ({ events, date, onNavigate }) => {
  return (
    <div
      className="calendar-container"
      style={{height: "600px"}}
      data-test-calendar
    >
      <BigCalendar
        localizer={localizer}
        events={events}
        views={allViews}
        defaultDate={date}
        onNavigate={onNavigate}
      />
    </div>
  );
};

Calendar.propTypes = {
  date: PropTypes.date,
  events: PropTypes.arrayOf(PropTypes.object),
  onNavigate: PropTypes.func
};

const RequestListItem = ({ removeRequestById, request }) => {
  return (
    <div className="level is-mobile" data-test-request-list-item>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading is-6">Requestee</p>
          <p className="title is-5" data-test-owner-name>{request.owner}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div data-test-start-date>
          <p className="heading is-6" data-test-label>Start date</p>
          <p className="title is-5" data-test-value>{moment(addOffset(request.startDate)).format('MM-DD-YYYY')}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div data-test-end-date>
          <p className="heading is-6" data-test-label>End date</p>
          <p className="title is-5" data-test-value>{moment(addOffset(request.endDate)).format('MM-DD-YYYY')}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div data-test-status>
          <p className="heading is-6" data-test-label>Status</p>
          <p className="title is-5" data-test-value>{request.status}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <Link to={`/requests/${request.id}`} data-test-edit-icon>
          <span className="icon" >
            <i className="fas fa-edit"></i>
          </span>
        </Link>
      </div>
      <div className="level-item has-text-centered">
        <button className="button is-danger" onClick={() => removeRequestById(request.id)} data-test-delete-icon>
          <span className="icon" >
            <i className="fas fa-trash"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

RequestListItem.propTypes = {
  removeRequestById: PropTypes.func,
  request: PropTypes.object
};

const RequestList = ({ removeRequestById, requests }) => {
  return (
    <div className="requestList" data-test-request-list>
      {requests.map(req => (
        <RequestListItem
          request={req}
          removeRequestById={removeRequestById}
          key={req.id}
        />
      ))}
    </div>
  );
};

RequestList.propTypes = {
  removeRequestById: PropTypes.func,
  requests: PropTypes.arrayOf(PropTypes.object)
};

const dateFrom = date => 
  typeof date === 'string' ?
    addOffset(date) :
    date;

class EditForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    isNew: PropTypes.bool.isRequired,
    initialState: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    let initState = {
      ...props.initialState,
      startDate: dateFrom(props.initialState.startDate),
      endDate: dateFrom(props.initialState.endDate)
    };
    this.state = {
      initial: { ...initState },
      request: { ...initState }
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      ...this.state.request,
      startDate: removeOffset(this.state.request.startDate).toISOString(),
      endDate: removeOffset(this.state.request.endDate).toISOString()
    });
  }

  changeOwnerName = (event) => {
    let inputValue = event.target.value;
    this.setState(prevState => ({ request: { ...prevState.request, owner: inputValue }}));
  }

  changeEndDate = (date) => {
    this.setState(prevState => ({ request: { ...prevState.request, endDate: date }}));
  }

  changeStartDate = (date) => {
    this.setState(prevState => ({ request: { ...prevState.request, startDate: date }}));
  }

  changeStatus = (event) => {
    let inputValue = event.target.value;
    this.setState(prevState => ({ request: { ...prevState.request, status: inputValue }}));
  }

  get formHasChanged() {
    let current = this.state.request;
    return Object
      .entries(this.state.initial)
      .reduce((acc, [key, value]) => {
        return acc ?
          acc :
          value instanceof Date ?
            !(moment(value).isSame(current[key], 'day')) :
            value !== current[key];
      }, false);
  }

  render() {
    let { request } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="label">Requestee</label>
          <div className="control">
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <input
              className="input"
              type="text"
              readOnly={!this.props.isNew}
              value={request.owner}
              onChange={this.changeOwnerName}
              data-test-owner-name
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Start Date</label>
          <div className="control" data-test-start-date>
            <DayPickerInput
              value={request.startDate}
              placeholder="Start date"
              format="MM-DD-YYYY"
              formatDate={formatDate}
              parseDate={parseDate}
              onDayChange={this.changeStartDate}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">End Date</label>
          <div className="control" data-test-end-date>
            <DayPickerInput
              value={request.endDate}
              placeholder="End date"
              format="MM-DD-YYYY"
              formatDate={formatDate}
              parseDate={parseDate}
              onDayChange={this.changeEndDate}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Status</label>
          <div className="control has-icons-left">
            <span className="icon is-left">
              <i className="fas fa-check-square"></i>
            </span>
            <div className="select">
              <select
                value={request.status}
                data-test-status
                readOnly={this.props.isNew}
                onChange={this.changeStatus}
              >
                <option value="Approved">Approved</option>
                <option value="Denied">Denied</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <input
              className="button is-link"
              data-test-save
              type="submit"
              value="Save"
              disabled={!this.formHasChanged}
            />
          </div>
          <div className="control">
            <Link to="/">
              <button className="button is-text" data-test-cancel>Cancel</button>
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

class DetailRoute extends React.Component {
  static propTypes = {
    navigate: PropTypes.func,
    requestId: PropTypes.string
  }; 
  
  _isMounted = false;

  state = {
    key: 0,
    request: {
      owner: '',
      startDate: undefined,
      endDate: undefined,
      status: ''
    }
  };

  componentDidMount() {
    this._isMounted = true;
    fetch(`https://api.frontside.io/v1/requests/${this.props.requestId}`)
      .then(response => response.json())
      .then(data => {
        if (this._isMounted) {
          this.setState(state => ({ request: data.request, key: state.key + 1 }));
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  updateRecord = (payload) => {
    fetch(`https://api.frontside.io/v1/requests/${this.props.requestId}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(() => {
        this.props.navigate('/');
      })
      .catch(error => console.error('Error: ', error)); // eslint-disable-line no-console
  }

  render() {
    let { requestId } = this.props;
    let { request, key } = this.state;
    return (
      <div data-test-detail-route>
        <h6>
          Editing Request ID: {`${requestId}`}
        </h6>
        <EditForm
          key={key}
          onSubmit={this.updateRecord}
          initialState={request}
        />
      </div>
    );
  }
}

const initialState = {
  owner: '',
  startDate: undefined,
  endDate: undefined,
  status: 'Pending'
};

class CreateRoute extends React.Component {
  static propTypes = {
    navigate: PropTypes.func,
  };

  createRecord = (payload) => {
    fetch(`https://api.frontside.io/v1/requests`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(() => this.props.navigate('/'))
      .catch(error => console.error('Error: ', error)); // eslint-disable-line no-console
  }

  render() {
    return (
      <div data-test-create-route>
        <h6>
          Creating new vacation request
        </h6>
        <EditForm
          onSubmit={this.createRecord}
          initialState={initialState}
          isNew={true}
        />
      </div>
    );
  }
}


// This is the start of the old stuff
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

  render() {

    return (
      <ReactRouterDOM.HashRouter>
        <Root>
          <IndexRoute path="/" />
          <CalendarRoute path="/calendar/:date" />
          <CalendarRoute path="/calendar" />
          <CreateRoute path="/requests/new" />
          <DetailRoute path="/requests/:requestId" />
        </Root>
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
