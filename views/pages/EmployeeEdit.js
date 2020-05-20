let EmployeeEdit = {
    render : async () => {
        let view =  `
            <section class="section">
                <header class="bg-primary text-center py-5 mb-0">
                    <div class="container">
                        <h1 class="font-weight-light text-white display-4">
                            Editing Employee
                        </h1>
                        <a href="home.html" class="btn btn-danger mr-5">Go Back</a>
                        <a class="btn btn-warning" id="saveEmployee">Save Employee</a>
                    </div>
                </header>

                <div class="container mt-2 p-0">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a class="nav-link active" id="v-pills-personalInfo-tab" data-toggle="pill"
                                    href="#v-pills-personalInfo" role="tab" aria-controls="v-pills-personalInfo"
                                    aria-selected="true">Personal Info</a>

                                <a class="nav-link" id="v-pills-positions-tab" data-toggle="pill" href="#v-pills-positions"
                                    role="tab" aria-controls="v-pills-positions" aria-selected="false">Positions</a>

                                <a class="nav-link" id="v-pills-shiftPreferences-tab" data-toggle="pill"
                                    href="#v-pills-shiftPreferences" role="tab" aria-controls="v-pills-shiftPreferences"
                                    aria-selected="false">Shift Preferences</a>

                                <a class="nav-link" id="v-pills-unavailability-tab" data-toggle="pill"
                                    href="#v-pills-unavailability" role="tab" aria-controls="v-pills-unavailability"
                                    aria-selected="false">Unavailability</a>
                            </div>
                        </div>

                        <div class="col-md-10">
                            <div class="tab-content" id="v-pills-tabContent">

                                <!-- PERSONAL INFO SECTION  -->
                                <div class="tab-pane fade show active" id="v-pills-personalInfo" role="tabpanel"
                                    aria-labelledby="v-pills-personalInfo-tab">
                                    <div class="card border-0 shadow">
                                        <div class="card-body">
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="firstName">First Name</label>
                                                    <input type="text" class="form-control" id="firstName" />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="lastName">Last Name</label>
                                                    <input type="text" class="form-control" id="lastName" />
                                                </div>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-group col-md-4">
                                                    <label for="minHoursPerWeek">Minimum Hours Per Week</label>
                                                    <input type="number" class="form-control" id="minHoursPerWeek" />
                                                </div>

                                                <div class="form-group col-md-4">
                                                    <label for="maxHoursPerWeek">Maximum Hours Per Week</label>
                                                    <input type="number" class="form-control" id="maxHoursPerWeek" />
                                                </div>

                                                <div class="form-group col-md-4">

                                                    <label for="hourlyWage">Hourly Wage</label>

                                                    <input type="number" class="form-control" id="hourlyWage" />
                                                </div>


                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <!-- POSITIONS SECTIONS -->
                                <div class="tab-pane fade" id="v-pills-positions" role="tabpanel"
                                    aria-labelledby="v-pills-positions-tab">
                                    <div class="card border-0 shadow">
                                        <div class="card-body" id="test">
                                            <div class="container col-md-10 col-md-offset-1" id="primaryPositionsSection">
                                                <!-- THIS IS WHERE THE ADDED PRIMARY SKILLS WILL GO -->

                                                <div class="form-group text-center">
                                                    <button class="btn btn-primary btn-block" type="button" id="addPrimaryPosition">
                                                        Add Primary Position
                                                    </button>
                                                </div>
                                            </div>


                                            <hr>

                                            <div class="container col-md-10 col-md-offset-1" id="secondaryPositionsSection">
                                                <!-- THIS IS WHERE THE ADDED PRIMARY SKILLS WILL GO -->

                                                <div class="form-group text-center">
                                                    <button class="btn btn-primary btn-block" type="button"
                                                        id="addSecondaryPosition">
                                                        Add Secondary Position
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <!-- SHIFTS PREFERENCES SECTIONS -->
                                <div class="tab-pane fade" id="v-pills-shiftPreferences" role="tabpanel"
                                    aria-labelledby="v-pills-shiftPreferences-tab">
                                    <div class="card border-0 shadow">
                                        <div class="card-body">
                                            <div id="preferredShiftSection"></div>

                                        </div>
                                    </div>
                                </div>

                                <!-- UNAVAILABILITY SECTION -->
                                <div class="tab-pane fade" id="v-pills-unavailability" role="tabpanel"
                                    aria-labelledby="v-pills-unavailability-tab">
                                    <div class="card border-0 shadow">
                                        <div class="card-body">

                                            <div class="container col-md-10 col-md-offset-1" id="dayUnavailabilitySection">
                                                <div class="form-group text-center px-5">
                                                    <button class="btn btn-primary btn-block" type="button"
                                                        id="addDayUnavailability">
                                                        Add Day Unavailability
                                                    </button>
                                                </div>
                                            </div>

                                            <hr>

                                            <div class="container col-md-10 col-md-offset-1" id="dateUnavailableSection">
                                                <div class="form-group text-center px-5">
                                                    <button class="btn btn-primary btn-block" type="button"
                                                        id="addDateUnavailability">
                                                        Add Date Unavailability
                                                    </button>
                                                </div>
                                            </div>

                                            <hr>

                                            <div class="container col-md-10 col-md-offset-1" id="prolongedUnavailabilitySection">
                                                <div class="form-group text-center px-5">
                                                    <button class="btn btn-primary btn-block" type="button"
                                                        id="addProlongedUnavailability">
                                                        Add Prolonged Unavailability
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
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

export default EmployeeEdit;