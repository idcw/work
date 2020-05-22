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
  let Rota = function ({ render }) {
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
  
    intent("saveBusiness", function(e) {
      console.log("save business")
      return false
    })
  
    let representation = () => `
        <section class="section">
            <a href="#/shifts" class="btn btn-lg btn-dark font-weight-bold">
                <h4>Manage Shifts</h4>
            </a>
            <a href="#/schedule" class="btn btn-lg btn-dark mx-3 font-weight-bold">
                <h4>Create Schedule</h4>
            </a>
            <a href="#/business" class="btn btn-lg btn-dark font-weight-bold">
                <h4>Business Information</h4>
            </a>
            <a href="#/employeelist" class="btn btn-lg btn-dark mt-3 font-weight-bold">
                <h4>Manage Employees</h4>
            </a>
        </section> 
          `
  
    return representation
  }
  
export default Rota;