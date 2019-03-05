var counter = function(arr) {
	return "Total item in the array is " + arr.length ;
};
var adder = function (a, b) {
	return `Sum of two number is : ${a+b}`;
}
var pi = 3.1415;

module.exports = {
	counter : counter,  // counter is counter
	adder : adder, // adder is adder
	pi : pi // pi is pi
}