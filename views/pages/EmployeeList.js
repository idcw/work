// --------------------------------
//  Define Data Sources
// --------------------------------

let intent = function (i, f) {
  window[i || '_'] = f
}

let value = function (el) {
  return document.getElementById(el).value
}

// Todo: Stateful Component + Component Composition
let EmployeeList = function ({ render }) {
  let state = { items: [], text: '', render }

  intent("addTodo", function (e) {
    const newItem = {
      text: value("text"),
      id: Date.now()
    }
    state.items.push(newItem)
    state.text = ''
    state.render(representation())
    return false
  })

  intent("saveBusiness", function (e) {
    console.log("save business")
    return false
  })

  let representation = () => `
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

  return representation
}

export default EmployeeList;