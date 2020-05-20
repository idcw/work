let Rota = {
    render : async () => {
        let view =  `
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
    },
    after_render: async () => {}
        
}

export default Rota;