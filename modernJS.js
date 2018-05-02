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

let arr = [5, 3, 8, 1];

function filterRange(arr, down, up) {
	return arr.filter( item => (item >= down && item <= up) );
}

let filtered = filterRange(arr, 1, 4);
log(filtered);