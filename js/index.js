/*
// parse request params
var q1 = $.url().param('q1');
$('input[name="q1"]').val(q1);
var q2 = $.url().param('q2');
$('input[name="q2"]').val(q2);
*/
var q1 = null;
var q2 = null;

// read data from database
var emps;
if (q1) {
	emps = alasql('SELECT * FROM emp WHERE number LIKE ?', [ '%' + q1 + '%' ]);
} else if (q2) {
	emps = alasql('SELECT * FROM emp WHERE name LIKE ?', [ '%' + q2 + '%' ]);
} else {
	emps = alasql('SELECT * FROM emp', []);
}

// create employee list
var element = document.getElementById('tbody-emps')
element.innerHTML = `${emps.map((emp, i) => `
	<tr>
		<td><a href="emp.html?id=${emp.id}">${emp.number}</a></td>
		<td>${emp.name}</td>
		<td>${emp.primarypositions}</td>
		<!--<td>${DB.choice(emp.sex)}</td>-->
		<td>${emp.startdate}</td>
	</tr>
`).join('')}
`
