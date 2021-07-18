// No.1 Quiz


// Fix the code in the code tab to pass this challenge(only syntax errors.) 
// Look at the examples below to get an idea of what the function should do.


// cubes(3) -> 27
// cubes(5) -> 125
// cubes(10) -> 1000


// function cubes(a) {
//     return a ** 3
// }

// other solution

// cubes=a=>a**3
// fuction cubes(a) {
//     return Math.pow(a,3)
// }







// No.2 Quiz
// Create a function that takes an array containing only numbers and return the first element.
// getFirstValue([1,2,3]) -> 1
// getFirstValue([80, 5, 100]) -> 80

// function getFirstValue(arr) {
//     return arr[0];
// }

// other solution
// arr.shift();







// No.3 Quiz
// Create a function that takes voltage and current and return the calculated power.
// circuitPower(230, 10) -> 2300
// circuitPower(110, 3) -> 330

// function circuitPower(voltage, current) {
//     return voltage * current;
// }






// No.4 Quiz
// Write a function that converts hours into seconds.
// howManySeconds(2) -> 7200
// // howManySeconds(10) -> 36000

// function howManySeconds(hours) {
//     return hours*60*60;
// }

// other solution

// function howManySeconds(hours) {
// 	return hours * 3600;
// }

// function howManySeconds(hours) {
// 	const mins = 60;
// 	const seconds = 60;
// 	return hours * mins * seconds 
// }

// const howManySeconds = hours => Number.isInteger(hours) ? hours*3600 : "error";

// function howManySeconds(hours) {
//     if (Number.isInteger(hours)) {
//         return hours * 3600
//     }
//     else {
//         return "input is not integer"
//     }
// }


// No.5 Write a function that takes an integer minutes and converts it to seconds.
// convert(5) -> 300
// convert(3) -> 180
// // convert(2) -> 120


// function convert(minutes) {
// 	return minutes * 60
// }


// function convert(minutes) {
// 	var seconds = minutes * 60;
// 	return (seconds);
// }


// No.6 Is the number less than or Equal to zero?
// Create a function that takes a number as its only argument and returns true
// if it's less than or equal to zero, otherwise return false.
// lessThanOrEquilToZero(5) -> false
// lessThanOrEqualToZero(0) -> true
// lessThanOrEqualToZero(-2) - true


// https://www.w3schools.com/js/js_if_else.asp if~else문
// function lessThanOrEqualToZero(num) {
//     if (num > 0) {
//         return false;
//     } else if (num = 0) {
//         return true;
//     } else {
//         return true;
//     }
// }


// https://www.programiz.com/javascript/ternary-operator 삼항 연산자
// function lessThanOrEqualToZero(num) {
// 	return num = (num > 0) ? false : true;
// }

// http://tcpschool.com/javascript/js_operator_comparison 비교 연산자
// function lessThanOrEqualToZero(num) {
// 	return num <= 0;
// }

// https://www.w3schools.com/js/js_es6.asp ES6 syntax (ES6 문법) 
// const lessThanOrEqualToZero = num => num <= 0;