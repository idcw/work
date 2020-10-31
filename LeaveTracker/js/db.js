/*
var db = require('diskdb');

empdb = db.connect('db', ['employee']);
categdb = db.connect('db', ['category']);
statusdb = db.connect('db', ['status']);
scheduledb = db.connect('db', ['schedule']);

*/
var DB = {};

DB.init = function() {
	if (window.confirm('are you sure to initialize database?')) {
		DB.load();
	}
};

DB.load = function() {
	// employee info
	alasql('DROP TABLE IF EXISTS emp;');
	alasql(`CREATE TABLE emp(
        id INT IDENTITY,
        sn STRING,
        ename STRING,
        category STRING,
        coff INT,
        carry STRING,
        taken INT);`
    );

	// category
	alasql('DROP TABLE IF EXISTS category;');
	alasql(`CREATE TABLE category(
        id INT IDENTITY, 
        name STRING, 
        leave NUMBER);`
    );

    	// schedules
	alasql('DROP TABLE IF EXISTS schedules;');
	alasql(`CREATE TABLE schedules(
        id INT IDENTITY,
        emp INT
        fday INT,
        fmonth INT,
        fyear INT,
        tday INT,
        tmonth INT,
        tyear INT,
        status STRING,
        date STRING,
        total NUMBER,
        sid STRING);`
	);
	
	// status
	alasql('DROP TABLE IF EXISTS status;');
	alasql(`CREATE TABLE status(
        id INT IDENTITY, 
        name STRING);`
    );
};

DB.remove = function() {
	if (window.confirm('are you sure do delete dababase?')) {
		alasql('DROP localStorage DATABASE LEAVE')
	}
};

DB.choice = function(id) {
	var choices = alasql('SELECT text FROM choice WHERE id = ?', [ id ]);
	if (choices.length) {
		return choices[0].text;
	} else {
		return '';
	}
};

DB.choices = function(name) {
	return alasql('SELECT id, text FROM choice WHERE name = ?', [ name ]);
};

// connect to database for all pages
try {
	alasql('ATTACH localStorage DATABASE LEAVE');
	alasql('USE LEAVE');
} catch (e) {
	alasql('CREATE localStorage DATABASE LEAVE');
	alasql('ATTACH localStorage DATABASE LEAVE');
	alasql('USE LEAVE');
	DB.load();
}
