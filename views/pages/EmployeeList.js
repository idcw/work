// --------------------------------
//  Define Data Sources
// --------------------------------

let EmployeeList = {
  render: async () => {
    let view =  /*html*/`
      <section class="section">
        <header class="bg-primary text-center py-5 mb-4">
          <div class="container">
            <h1 class="font-weight-light text-white display-4">
              List of Employees
            </h1>
            <a href="#/" class="btn btn-danger mr-5">Go Back</a>
            <a href="#/employeeedit" class="btn btn-secondary">+ Add Employee</a>
          </div>
        </header>

        <div class="container">
          <div class="row" id="employeeList">
            <!-- This is where employees will be inserted -->
          </div>
        </div>
      </section>
     `
    return view
  }
  , after_render: async () => {
  }

}

export default EmployeeList;