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
/*
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

*/

// Immediately Invoked Function Expression

// var foo = "foo";

// (function (innerFoo) {
//     // Outputs: "foo"
//     console.log(innerFoo);
// })(foo);



// Lecture: Closure

// function retirement (retirementAge) {
// 	var str = ' years left until retirement';
// 	return function (yearOfBirth) {
// 		var age = 2018 -yearOfBirth;
// 		console.log((retirementAge - age) + str);
// 	}
// }

// retirement(60)(1996);

// var retirementVN = retirement(60); 



// Lecture: bind, call, apply

// var john = {
// 	name: 'John',
// 	job: 'student',
// 	presentation: function(style, time) {
// 		console.log('Hey ' + this.name + ', ' + style+ ', ' + 'Good ' + time + ' !');
// 	}
// }

// // john.presentation('student', 'morning');

// var emily = {
// 	name: 'Emily'
// }

// // john.presentation.call(emily, 'student', 'morning');
// // john.presentation.apply(emily, ['student', 'morning']);
// var emilyF = john.presentation.bind(emily);
// emilyF('student', 'afternoon');


// function palindrome(str) {
//   // Good luck!
//   str = str.toLowerCase();
//   var expression = /[a-z0-9]/g;
//   array1 = str.match(expression);
//   // console.log(expression.test(str));
//   array2 = array1.slice(0);
//   console.log(array1);
// 	array2.reverse();
//   console.log(array2);

//   if (array1.length !== array2.length) 
//   	return false;
//   for (var i = 0; i < array1.length; i++) {
//   	if (array1[i] !== array2[i])
//   		return false;
//   }
//   return true;
// }

// console.log(palindrome("_eye"));



// function titleCase(str) {
//   var lowStr = str.toLowerCase();
//   // console.log(lowStr);
//   var array = lowStr.split(' ');
//   console.log(array);
//   for (var i = 0; i < array.length; i++) {
//   	array[i]= array[i][0].toUpperCase() + array[i].substring(1);
//   }
//   var strResult = array.join(' ');
//   console.log(strResult);
// }

// titleCase("I'm a little tea pot");


// function repeatStringNumTimes(str, num) {
//   // repeat after me
//   if (num <= 0) return "";
  
//   return str.repeat(num);
// }

// repeatStringNumTimes("abc", 3);

// function func1() {
//   console.log(arguments[0]);
//   // expected output: 1

//   console.log(arguments[1]);
//   // expected output: 2

//   console.log(arguments[2]);
//   // expected output: 3
// }

// func1(1, 2, 3);

// function rot13(str) {
// 	var arrResult = [];
// 	var aCode = "A".charCodeAt(0);
// 	var zCode = "Z".charCodeAt(0);
// 	str = str.toUpperCase();
// 	for (var i = 0; i < str.length; i++) {
// 		curCode = str.charCodeAt(i);
// 		if (curCode >= aCode && curCode <= zCode) {
// 			curCode = ((curCode + 13) <= zCode) ? (curCode + 13) : (aCode + 12 - (zCode - curCode));
// 		}
// 		arrResult.push(String.fromCharCode(curCode));
// 	}
// 	console.log(arrResult.join(""));
// 	return arrResult.join("");
// }

// rot13("1PHAM DUC HIEN.");