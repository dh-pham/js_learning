function my_log(item) {
	console.log(item);
}

// function pow(a, b) {
// 	return a ** b;
// }

// let arr = ["I", "go", "home"];

// delete arr[0];
// console.my_log(arr);

// let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "John"}
// ];

// let user = users.find(item => item.name == "John");

// my_log(user.id); // John

// let arr = [1, 2, 15];
// arr.sort(function(a, b) {
// 	if (a == b)
// 		return 0;
// 	if (a > b) 
// 		return 1;
// 	else 
// 		return -1;
// });
// my_log(arr);
// let arr = [1, -2, 15, 2, 0, 8];
// arr.sort(function(a, b) {
//   my_log( a + " <> " + b );
// 	if (a == b)
// 		return 0;
// 	if (a > b) 
// 		return 1;
// 	else 
// 		return -1;
// });
// my_log(arr);

// arr.sort( (a, b) => a - b );
// my_log(arr);

// arr.forEach((item) => my_log(item) );

// function camelize(str) {
// 	let elementArr = str.split('-');
// 	let upCaseArr = elementArr.map( item => item[0].toUpperCase() + item.slice(1));
// 	console.my_log(upCaseArr);
// 	return upCaseArr.join('');
// }

// console.my_log(camelize("background-color"));

// let arr = [5, 3, 8, 1];

// function filterRange(arr, down, up) {
// 	return arr.filter( item => (item >= down && item <= up) );
// }

// let filtered = filterRange(arr, 1, 4);
// my_log(filtered);

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];
// function mapUser(item) {
// 	item.fullName = item.name + ' ' + item.surname;
// 	delete item.name;
// 	delete item.surname;
// 	return item;
// }
// let usersMapped = users.map(mapUser);

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */
// my_log(usersMapped);

// let arr = {
// 	0: "pham",
// 	1: "duc",
// 	length: 2
// }
// let newArr = Array.from(arr);
// my_log(newArr);
// for (let item of newArr) {
// 	my_log(item);
// }

/*			04/05/2018		*/
// let obj = {
// 	1: "h",
// 	// "1": "hien"
// }

// my_log(obj);
// my_log(obj["1"]);

// we add the id field
// let john = { name: "John", id: 1 };

// let visitsCounts = {};

// // now store the value by id
// visitsCounts[john.id] = 123;
// my_log(visitsCounts);
// my_log( visitsCounts[john.id] ); // 123

// array of [key, value] pairs
// let map = new Map([
//   ['1',  'str1'],
//   [1,    'num1'],
//   [true, 'bool1']
// ]);

// my_log(map.keys());
// map.forEach( (value, key) => my_log(key) );
// let set = new Set(["oranges", "apples", "bananas"]);

// for (let value of set) my_log(value);

// set.forEach((value) => {
//   my_log(value);
// });

// let john = { name: "John" };

// let map = new Map();
// map.set(john, "...");

// john = null; // overwrite the reference
// my_log(map);
// // john is stored inside the map
// // we can get it by using map.keys()

// we have an array with the name and surname
// let arr = ["Ilya", "Kantor"]

// // destructuring assignment
// let [firstName, surname] = arr;
// my_log(firstName)


// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// let {title, width, height} = options;

// my_log(title);  // Menu
// my_log(width);  // 100
// my_log(height); // 200

// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// my_log(name1); // Julius
// my_log(name2); // Caesar
// my_log(rest); 

// let now = new Date("05/05/2018");
// my_log(now);

// let student = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js'],
//   wife: null
// };

// let json = JSON.stringify(student);
// my_log(json);
// let obj = JSON.parse(json);
// my_log(obj);

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });

// my_log(meetup);

// let arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);

// my_log(arr.pop());
// let dest ={};
// dest = Object.assign(dest, {"1": "one"}, {2: "two"});
// my_log(dest);

// let arr = [1, 5, 9, 7];
// my_log(Math.max(...arr));  // 9
// my_log([...arr]);  // [1, 5, 9, 7]

// let name = "John";

// function sayHi() {
//   my_log("Hi, " + name);
// }

// name = "Pete";

// sayHi(); // what will it show: "John" or "Pete"?

// function makeWorker() {
//   let name = "Pete";

//   return function() {
//     my_log(name);
//   };
// }

// let name = "John";

// // create a function
// let work = makeWorker();

// // call it
// work(); // what will it show? "Pete" (name where created) or "John" (name where called)?

// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++; // has access to the outer counter
//   };
// }

// let counter = makeCounter();

// my_log(counter());
// my_log(counter());
// my_log( makeCounter()() ); // 0
// my_log( makeCounter()() ); // 0

// function sayHi() {
//   my_log(phrase);

//   var phrase = "Hello";
// }

// sayHi();

// var phrase = "Hello";

// function sayHi() {
// 	var hien = 1;
//   my_log(phrase);
// }

// // can read from window
// my_log( window.phrase ); // Hello (global var)
// my_log( window.sayHi ); // function (global function declaration)

// // can write to window (creates a new global variable)
// window.test = 5;

// my_log(test); // 5

// function helloWorld() {
// 	alert("Hello World!");
// }

// setTimeout(helloWorld, 2000);

// let i = 0;

// setTimeout(() => alert(i), 100); // ?

// // assume that the time to execute this function is >100ms
// for(let j = 0; j < 100000000; j++) {
//   i++;
// }

function power(a, b) {
	return a ** b;
}

// my_log(power(4, 3));
// let arr = [4, 3];
// my_log(power(...arr));
function funcDecorator(func) {
	let caching = new Map();
	return function(...arr) {
		if (caching.has(func(...arr)) ) {
			my_log(`cached ${caching.get(func(...arr))}`);
			return caching.get(func(...arr));
		} else {
			let result = func(...arr);
			my_log(`add ${result} to Map`);
			caching.set(func(...arr), result);
			return result;
		}
	}
}
powerDecorator = funcDecorator(power);
powerDecorator(2, 3) // expect 8
powerDecorator(2, 5) // expect 32
powerDecorator(2, 3) // expect 8

