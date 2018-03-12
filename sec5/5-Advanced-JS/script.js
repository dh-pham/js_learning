/*
var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person.prototype.calculateAge = function() {
	console.log(2018 - this.yearOfBirth);
}

Person.prototype.firstName = 'Pham';

hien = new Person('Hien', 1996, 'Student');
*/

// Object.created
/*
var personProto = {
	first: 'Pham',
	calculateAge: function() {
		console.log(2018 - this.yearOfBirth);
	}
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1996;
john.job = 'teacher';

var hien = Object.create(personProto,
{
	name: { value: 'Hien'},
	yearOfBirth: { value: 1996 },
	job: { value: 'designer'}
});

console.log(john.calculateAge());
console.log(hien.first);
*/


// Lecture: Functions returning functions

function interviewQuestion(job) {
	if (job === 'designer') {
		return function(name) {
			console.log(name + ', can you please explain what UX design is?');
		}
	} else if (job === 'teacher') {
		return function(name) {
			console.log('What subject do you teach, ' + name + '?');
		}
	} else {
		return function(name) {
			console.log('Hello ' +
				name + ', what do you do?');
		}
	}
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Hien');
interviewQuestion('designer')('Giang');
