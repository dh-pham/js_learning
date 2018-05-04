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

// alert(user.id); // John

// let arr = [1, 2, 15];
// arr.sort(function(a, b) {
// 	if (a == b)
// 		return 0;
// 	if (a > b) 
// 		return 1;
// 	else 
// 		return -1;
// });
// alert(arr);
// let arr = [1, -2, 15, 2, 0, 8];
// arr.sort(function(a, b) {
//   alert( a + " <> " + b );
// 	if (a == b)
// 		return 0;
// 	if (a > b) 
// 		return 1;
// 	else 
// 		return -1;
// });
// alert(arr);

// arr.sort( (a, b) => a - b );
// alert(arr);

// arr.forEach((item) => alert(item) );

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

