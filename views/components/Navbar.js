let Navbar = {
  render: async () => {
      let view = `
        <nav class="ms-tab ms-fullwidth">
          <ul>
            <li>
              <a href="#/">Home</a>
            </li>
            <li>
              <a href="#/rota">Rota</a>
            </li>
            <li>
              <a href="#/leave">Leave</a>
            </li>
            <li>
              <a href="#/workload">Workload</a>
            </li>
          </ul>
        </nav>
      `
      return view
  },
  after_render: async () => { }

}

export default Navbar;
