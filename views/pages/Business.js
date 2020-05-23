import Utils        from './../../services/Utils.js'

let getPost = async (id) => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`https://5bb634f6695f8d001496c082.mockapi.io/api/posts/` + id, options)
       const json = await response.json();
       // console.log(json)
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}

let Business = {

    render : async () => {
        let request = Utils.parseRequestURL()
        // let post = await getPost(request.id)
    
        return `
        <section class="section">
        <header class="bg-primary text-center py-5 mb-0">
          <div class="container">
            <h1 class="font-weight-light text-white display-4">
              Business Information
            </h1>
            <a href="#/rota" class="btn btn-danger mr-5">Go Back</a>
            <a class="btn btn-warning" id="saveBusinessInfo" onclick="saveBusiness()">Save Changes</a>
          </div>
        </header>
  
        <div class="row">
          <div class="col-md-6">
            <div class="card border-0 shadow mt-2">
              <div class="card-header text-white text-center">
                <h2>Opening Hours</h2>
              </div>
              <div class="card-body">
  
                <!-- LABELLING STRUCTURE -->
                <div class="row mb-0">
                  <div class="col-md-2">
                    <label for="daysUnavailable"><h4>Week Day</h4></label>
                  </div>
                  <div class="col-md-5">
                    <label for="mondayOpeningTime"><h4>Opening Time</h4></label>
                  </div>
                  <div class="col-md-5">
                    <label for="mondayClosingTime"><h4>Closing Time</h4></label>
                  </div>
                </div>
                <hr>
  
                <div class="form-row">
                  <div class="form-group col-md-2">
                    <h5>Monday:<h5>
                    
                  </div>
  
                  <div class="form-group col-md-5">
                    <input type="time" class="form-control mondayOpeningTime" />
                  </div>
  
                  <div class="form-group col-md-5">
                    <input type="time" class="form-control mondayClosingTime" />
                  </div>
                </div>
  
                <div class="form-row">
                    <div class="form-group col-md-2">
                        <h5>Tuesday:<h5>
                        
                    </div>
  
                    <div class="form-group col-md-5">
                        <input type="time" class="form-control tuesdayOpeningTime" />
                    </div>
  
                    <div class="form-group col-md-5">
                        <input type="time" class="form-control tuesdayClosingTime" />
                    </div>
                </div>
  
                <div class="form-row">
                    <div class="form-group col-md-2">
                        <h5>Wednesday:<h5>
                        
                    </div>
  
                    <div class="form-group col-md-5">
                        <input type="time" class="form-control wednesdayOpeningTime" />
                    </div>
  
                    <div class="form-group col-md-5">
                        <input type="time" class="form-control wednesdayClosingTime" />
                    </div>
                </div>
  
                <div class="form-row">
                    <div class="form-group col-md-2">
                        <h5>Thursday:<h5>
                        
                    </div>
  
                    <div class="form-group col-md-5">
                        <input type="time" class="form-control thursdayOpeningTime" />
                    </div>
  
                    <div class="form-group col-md-5">
                        <input type="time" class="form-control thursdayClosingTime" />
                    </div>
                </div>
  
                <div class="form-row">
                    <div class="form-group col-md-2">
                        <h5>Friday:<h5>
                        
                    </div>
  
                    <div class="form-group col-md-5">
                        <input type="time" class="form-control fridayOpeningTime" />
                    </div>
  
                    <div class="form-group col-md-5">
                        <input type="time" class="form-control fridayClosingTime" />
                    </div>
                </div>
  
                <div class="form-row">
                    <div class="form-group col-md-2">
                        <h5>Saturday:<h5>
                        
                    </div>
  
                    <div class="form-group col-md-5">
                        <input type="time" class="form-control saturdayOpeningTime" />
                    </div>
  
                    <div class="form-group col-md-5">
                        <input type="time" class="form-control saturdayClosingTime" />
                    </div>
                </div>
  
                <div class="form-row">
                    <div class="form-group col-md-2">
                        <h5>Sunday:<h5>
                        
                    </div>
  
                    <div class="form-group col-md-5">
                        <input type="time" class="form-control sundayOpeningTime" />
                    </div>
  
                    <div class="form-group col-md-5">
                        <input type="time" class="form-control sundayClosingTime" />
                    </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="col-md-6">
            <div class="card border-0 shadow mt-2">
              <div class="card-header text-white text-center">
                <h2>Positions/Skills</h2>
              </div>
              <div class="card-body" id="businessSkillsSection">
                <label for="businessSkill"><b>Position/Skill</b> (i.e. hostess, waiter, line cook in a restaurant)</label>
                <div class="form-row">
                    <div class="form-group col-md-10">
                        <input type="text" class="form-control businessSkill">
                    </div>
                    <div class="form-group col-md-2">
                        <button
                        class="btn btn-primary"
                        type="button"
                        id="addBusinessSkill"
                        >
                        Add Skill
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
        `
    }
    , after_render: async () => {
    }
}

export default Business;