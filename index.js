const lib = require('./Utilities/file1');
const col = require('./Utilities/file2');

numberArray = [18,09,1,23,47,5,31,3];
secondNumberArray = [10,11,12];

let highest = lib.largeNumber(numberArray);

function Sum(arr){
	let total = col.sum(arr);
	return total;
}

console.log("The highest number is: ",highest);
console.log("Remove the 3rd item from array: ", lib.cut3(numberArray));
console.log("Add numbers in an array: ", Sum(numberArray));
console.log("concatenate two arrays: ", col.concat(numberArray,secondNumberArray));