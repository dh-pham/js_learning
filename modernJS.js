function log(item) {
	console.log(item);
}

// function pow(a, b) {
// 	return a ** b;
// }

// let arr = ["I", "go", "home"];

// delete arr[0];
// console.log(arr);

// let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "John"}
// ];

// let user = users.find(item => item.name == "John");

// log(user.id); // John

// let arr = [1, 2, 15];
// arr.sort(function(a, b) {
// 	if (a == b)
// 		return 0;
// 	if (a > b) 
// 		return 1;
// 	else 
// 		return -1;
// });
// log(arr);
// let arr = [1, -2, 15, 2, 0, 8];
// arr.sort(function(a, b) {
//   log( a + " <> " + b );
// 	if (a == b)
// 		return 0;
// 	if (a > b) 
// 		return 1;
// 	else 
// 		return -1;
// });
// log(arr);

// arr.sort( (a, b) => a - b );
// log(arr);

// arr.forEach((item) => log(item) );

// function camelize(str) {
// 	let elementArr = str.split('-');
// 	let upCaseArr = elementArr.map( item => item[0].toUpperCase() + item.slice(1));
// 	console.log(upCaseArr);
// 	return upCaseArr.join('');
// }

// console.log(camelize("background-color"));

// let arr = [5, 3, 8, 1];

// function filterRange(arr, down, up) {
// 	return arr.filter( item => (item >= down && item <= up) );
// }

// let filtered = filterRange(arr, 1, 4);
// log(filtered);

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
// log(usersMapped);

// let arr = {
// 	0: "pham",
// 	1: "duc",
// 	length: 2
// }
// let newArr = Array.from(arr);
// log(newArr);
// for (let item of newArr) {
// 	log(item);
// }

/*			04/05/2018		*/
// let obj = {
// 	1: "h",
// 	// "1": "hien"
// }

// log(obj);
// log(obj["1"]);

// we add the id field
// let john = { name: "John", id: 1 };

// let visitsCounts = {};

// // now store the value by id
// visitsCounts[john.id] = 123;
// log(visitsCounts);
// log( visitsCounts[john.id] ); // 123

// array of [key, value] pairs
// let map = new Map([
//   ['1',  'str1'],
//   [1,    'num1'],
//   [true, 'bool1']
// ]);

// log(map.keys());
// map.forEach( (value, key) => log(key) );
// let set = new Set(["oranges", "apples", "bananas"]);

// for (let value of set) log(value);

// set.forEach((value) => {
//   log(value);
// });

// let john = { name: "John" };

// let map = new Map();
// map.set(john, "...");

// john = null; // overwrite the reference
// log(map);
// // john is stored inside the map
// // we can get it by using map.keys()

// we have an array with the name and surname
// let arr = ["Ilya", "Kantor"]

// // destructuring assignment
// let [firstName, surname] = arr;
// log(firstName)


// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// let {title, width, height} = options;

// log(title);  // Menu
// log(width);  // 100
// log(height); // 200

// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// log(name1); // Julius
// log(name2); // Caesar
// log(rest); 

// let now = new Date("05/05/2018");
// log(now);

// let student = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js'],
//   wife: null
// };

// let json = JSON.stringify(student);
// log(json);
// let obj = JSON.parse(json);
// log(obj);

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

log(meetup);

