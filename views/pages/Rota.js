// --------------------------------
//  Define Data Sources
// --------------------------------

let getPostsList = async () => {
  const options = {
     method: 'GET',
     headers: {
         'Content-Type': 'application/json'
     }
 };
 try {
     const response = await fetch(`https://5bb634f6695f8d001496c082.mockapi.io/api/posts`, options)
     const json = await response.json();
     // console.log(json)
     return json
 } catch (err) {
     console.log('Error getting documents', err)
 }
}

let Rota = {
 render : async () => {
     let posts = await getPostsList()
     let view = `
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
     return view
 }
 , after_render: async () => {
 }

}

export default Rota;
