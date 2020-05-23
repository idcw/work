// --------------------------------
//  Define Data Sources
// --------------------------------

let Schedule = {
 render : async () => {
     let view =  /*html*/`
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
     return view
 }
 , after_render: async () => {
 }

}

export default Schedule;
