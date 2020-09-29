// parse request params
var q1 = $.url().param('q1');
$('input[name="q1"]').val(q1);
var q2 = $.url().param('q2');
$('input[name="q2"]').val(q2);

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
		<td><img height=40 class="img-circle" src="img/${emp.id}.jpg"></td>
		<td><a href="emp.html?id=${emp.id}">${emp.number}</a></td>
		<td>${emp.name}</td>
		<td>${DB.choice(emp.sex)}</td>
		<td>${emp.birthday}</td>
		<td>${emp.tel}</td>
	</tr>
`).join('')}
`
