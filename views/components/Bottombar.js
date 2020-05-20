let Bottombar = {
    render: async () => {
        let view = `
        <footer class="page-footer font-small pt-4">
            <div class="content has-text-centered">
                    IDCW 2020.
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Bottombar;