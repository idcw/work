let Shifts = {
    render : async () => {
        let view =  `
            <section class="section">
              <header class="bg-primary text-center py-5 mb-0">
                <div class="container">
                  <h1 class="font-weight-light text-white display-4">
                    Shift Management
                  </h1>
                  <a href="home.html" class="btn btn-danger mr-5">Go Back</a>
                  <a class="btn btn-warning" id="saveShifts">Save Shifts</a>
                </div>
              </header>

              <div id="shiftsSection">
                <div class="container mt-2" id="shifts"></div>
              </div>

              <div class="container">
                <div class="card border-0 shadow mt-4">
                  <div class="card-header text-center px-0 mx-0">
                    <h2>Special Shifts</h2>
                  </div>
                  <div class="card-body" id="specialShiftSection">
                    <div class="container col-md-10 col-md-offset-1" id="specialShiftsSection">
                      <!-- THIS IS WHERE THE ADDED PRIMARY SKILLS WILL GO -->

                      <div class="form-group text-center">
                        <button class="btn btn-primary btn-block" type="button" id="addSpecialShift">
                          Add Special Shift
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        `
        return view
    },
    after_render: async () => {}
        
}

export default Shifts;