// ALASQL section to create the databases

var cityData = [{city:"Redmond", population:57530},
    {city:"Atlanta",population:447841},
    {city:"San Fracisco", population:837442}];

function setupDb() {

    return alasql.promise('CREATE INDEXEDDB DATABASE IF NOT EXISTS rota;\
                            ATTACH INDEXEDDB DATABASE rota;')
}

function setupTables() {

    return alasql.promise('CREATE TABLE IF NOT EXISTS employees;')
        .then(function(res) {
            alasql.promise('CREATE TABLE IF NOT EXISTS shifts;')
                .then(function(res) {
                    alasql.promise('CREATE TABLE IF NOT EXISTS schedule;')
                        .then(function(res) {
                            alasql.promise('CREATE TABLE IF NOT EXISTS employees;');
                        });
                });
        });
}

function init() {
    return setupDb()
        .then(function(res) {
            alasql('USE rota');
            setupTables()
        })
}

init().then(function(res) {
    //alasql.promise('SELECT * INTO employees FROM ?', [cityData])
    //    .then(function(res) {
            alasql.promise('SELECT COLUMN * FROM employees WHERE population > 100000 ORDER BY employee DESC')
              .then(function(res){
                //document.write('Big employees: ', res.join(','));
            });
    //    })
})

// Registering ServiceWorker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('sw.js').then(function(registration) {
		// Registration was successful
		console.log('ServiceWorker registration successful with scope: ',    registration.scope);
	}).catch(function(err) {
		// registration failed :(
		console.log('ServiceWorker registration failed: ', err);
	});
}
