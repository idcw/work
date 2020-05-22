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
let Home = function ({ render }) {
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
            <h1> Home </h1>
        </section>
          `

  return representation
}

export default Home;
