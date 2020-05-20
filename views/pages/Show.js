let Show = {
    render : async () => {
        let view =  `
            <section class="section">
  <div class="container-fluid p-0">
    <div class="col-md-12 p-0">
      <div class="card border-0 shadow">
        <div class="card-header text-white">
          <!-- <h2></h2> -->
        </div>
        <div class="card-body">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="firstName">First Name</label>
              <input type="text" class="form-control" id="firstName" placeholder="First Name" />
            </div>
            <div class="form-group col-md-6">
              <label for="lastName">Last Name</label>
              <input type="text" class="form-control" id="lastName" placeholder="Last Name" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="minHoursPerWeek">Minimum Hours Per Week</label>
              <input type="text" class="form-control" id="minHoursPerWeek" placeholder="Minimum Hours Per Week" />
            </div>
            <div class="form-group col-md-6">
              <label for="maxHoursPerWeek">Maximum Hours Per Week</label>
              <input type="text" class="form-control" id="maxHoursPerWeek" placeholder="Maximum Hours Per Week" />
            </div>
          </div>

          <!-- Horizontal rule to separate sections of the form -->
          <hr />

          <label for="primarySkills">Primary Skills</label>
          <div id="primarySkillsSection">
            <div class="form-row">
              <div class="form-group col-md-10">
                <select class="form-control primarySkills">
                  <option selected disable hidden value="">Select Primary Skills</option>
                  <!-- <option value="Prescription Processing"
                      >Prescription Processing</option
                    >
                    <option value="Medication Counting"
                      >Medication Counting</option
                    >
                    <option value="Cashier">Cashier</option> -->
                </select>
              </div>
              <div class="form-group col-md-2">
                <button class="btn btn-primary" type="button" id="addPrimarySkill">
                  Add Primary Skill
                </button>
              </div>
            </div>
          </div>

          <label for="secondarySkills">Secondary Skills</label>
          <div id="secondarySkillsSection">
            <div class="form-row">
              <div class="form-group col-md-10">
                <select class="form-control secondarySkills">
                  <option selected disable hidden value="">Select Secondary Skills</option>
                  <!-- <option value="Prescription Processing"
                      >Prescription Processing</option
                    >
                    <option value="Medication Counting"
                      >Medication Counting</option
                    >
                    <option value="Cashier">Cashier</option> -->
                </select>
              </div>
              <div class="form-group col-md-2">
                <button class="btn btn-primary" type="button" id="addSecondarySkill">
                  Add Secondary Skill
                </button>
              </div>
            </div>
          </div>

          <hr />
          <!-- UNAVAILABILITY SECTION -->

          <!--Structure for label formatting-->
          <div class="row">
            <div class="col-md-6">
              <label for="dayUnavailable">Days Unavailable</label>
            </div>
            <div class="col-md-2">
              <label for="dayUnavailabilityStart">Unavailability Start Time</label>
            </div>
            <div class="col-md-2">
              <label for="dayUnavailabilityEnd">Unavailability Finish Time</label>
            </div>
          </div>

          <div id="dayUnavailabilitySection">
            <div class="form-row">
              <div class="form-group col-md-6">
                <select class="form-control dayUnavailable">
                  <option selected disable hidden value="">Select Day of the Week</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>

              <div class="form-group col-md-2">
                <input type="time" class="form-control dayUnavailabilityStart" />
              </div>

              <div class="form-group col-md-2">
                <input type="time" class="form-control dayUnavailabilityEnd" />
              </div>

              <div class="form-group col-md-2">
                <button class="btn btn-primary" type="button" id="addDayUnavailability">
                  Add Day Unavailability
                </button>
              </div>
            </div>
          </div>

          <label for="dateInput">Dates Unavailable</label>
          <div id="dateUnavailableSection">
            <div class="form-row">
              <div class="form-group col-md-8">
                <div class="input-group date">
                  <input type="text" class="form-control dateInput dateUnavailable" aria-describedby="calenderIcon" />
                  <div class="input-group-append">
                    <span class="input-group-text" id="calenderIcon"><i class="fas fa-calendar-alt"></i></span>
                  </div>
                </div>
              </div>

              <div class="form-group col-md-2">
                <button class="btn btn-primary" type="button" id="addDateUnavailability">
                  Add Date Unavailability
                </button>
              </div>

              <div class="form-group col-md-2">
                <button class="btn btn-danger removeDateUnavailability">
                  Remove Unavailability
                </button>
              </div>
            </div>
          </div>
          
          <hr>
          <p>Prolonged Unavailability</p>
          <div class="form-row">
            <div class="col-md-4">
              <label for="prolongedUnavailabilityStart">Start Date</label>
            </div>
            <div class="col-md-4">
              <label for="prolongedUnavailabilityEnd">End Date</label>
            </div>
          </div>

          <div id="prolongedUnavailabilitySection">
            <div class="form-row">
              <div class="form-group col-md-4">
                <div class="input-group date">
                  <input type="text" class="form-control dateInput prolongedUnavailabilityStart" />
                  <div class="input-group-append">
                    <span class="input-group-text" id="calenderIcon"><i class="fas fa-calendar-alt"></i></span>
                  </div>
                </div>
              </div>

              <div class="form-group col-md-4">
                <div class="input-group date">
                  <input type="text" class="form-control dateInput prolongedUnavailabilityEnd"
                    aria-describedby="calenderIcon" />
                  <div class="input-group-append">
                    <span class="input-group-text" id="calenderIcon"><i class="fas fa-calendar-alt"></i></span>
                  </div>
                </div>
              </div>

              <div class="form-group col-md-2">
                <button class="btn btn-primary" type="button" id="addProlongedUnavailability">
                  Add Unavailability
                </button>
              </div>

              <div class="form-group col-md-2">
                <button class="btn btn-danger removeProlongedUnavailability">
                  Remove Unavailability
                </button>
              </div>

            </div>
          </div>

          <hr />

          <!-- PREFERRED HOURS SECTION -->
          <div class="row">
            <div class="col-md-4">
              <label for="preferredShift">Preferred Shifts</label>
            </div>
            <div class="col-md-2">
              <label for="preferredShiftStart">Start Time</label>
            </div>
            <div class="col-md-2">
              <label for="preferredShiftEnd">Finish Time</label>
            </div>
          </div>

          <div id="preferredShiftSection">
            <div class="form-row">
              <div class="form-group col-md-4">
                <select class="form-control preferredShift">
                  <option selected disable hidden value="">Select Day of the Week</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>

              <div class="form-group col-md-2">
                <input type="time" class="form-control preferredShiftStart" />
              </div>

              <div class="form-group col-md-2">
                <input type="time" class="form-control preferredShiftEnd" />
              </div>

              <div class="form-group col-md-2">
                <button class="btn btn-primary" type="button" id="addPreferredShift">
                  Add Preferred Shift
                </button>
              </div>

              <div class="form-group col-md-2">
                <button class="btn btn-danger removePreferredShift">
                  Remove Preferred Shift
                </button>
              </div>

            </div>
          </div>

          <hr />

          <div class="form-row justify-content-end ">
            <div class="form-group mr-2">
              <button class="btn btn-primary" type="button" id="updateEmployee">
                Update Employee
              </button>
            </div>

            <div class="form-group">
              <a class="btn btn-danger" id="cancelAddingEmployee" href="./employeeList.html">
                Cancel Editing Employee
              </a>
            </div>
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

export default Show;