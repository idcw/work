let Navbar = {
    render: async () => {
        let view =  `
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
        return view
    },
    after_render: async () => { }

}

export default Navbar;