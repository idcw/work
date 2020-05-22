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
let Navbar = function ({ render }) {
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
      <nav>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="#/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/rota">Rota</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/leave">Leave</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/workload">Workload</a>
          </li>
        </ul>
      </nav>
        `

  return representation
}

export default Navbar;
