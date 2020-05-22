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
let Schedule = function ({ render }) {
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
        <header class="bg-primary text-center py-5 mb-0">
          <div class="container">
            <h1 class="font-weight-light text-white display-4">
              Shift Scheduling
            </h1>
            <a href="home.html" class="btn btn-danger mr-5">Go Back</a>
            <a class="btn btn-warning" id="saveSchedule">Save Schedule</a>
          </div>
        </header>

        <div class="container mt-2 p-0">
          <div class="form-row">
            <div class="col-md-5">
              <label for="scheduleStart">Start Date</label>
            </div>
            <div class="col-md-5">
              <label for="scheduleEnd">End Date</label>
            </div>
          </div>

          <div id="scheduleSection">
            <div class="form-row">
              <div class="form-group col-md-5">
                <div class="input-group date">
                  <input type="text" class="form-control dateInput scheduleStart" />
                  <div class="input-group-append">
                    <span class="input-group-text" id="calenderIcon"><i class="fas fa-calendar-alt"></i></span>
                  </div>
                </div>
              </div>

              <div class="form-group col-md-5">
                <div class="input-group date">
                  <input type="text" class="form-control dateInput scheduleEnd" aria-describedby="calenderIcon" />
                  <div class="input-group-append">
                    <span class="input-group-text" id="calenderIcon"><i class="fas fa-calendar-alt"></i></span>
                  </div>
                </div>
              </div>

              <div class="form-group col-md-2">
                <button class="btn btn-primary" type="button" id="createSchedule">
                  Generate New Schedule
                </button>
              </div>

              <div class="container" id="schedule"></div>

            </div>
          </div>
        </div>
      </div>
      </section>
          `

  return representation
}

export default Schedule;
