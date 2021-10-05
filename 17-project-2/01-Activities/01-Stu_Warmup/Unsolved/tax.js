/*
* The function should take 1 parameter that represents the price of the object.

* The function should return the total price with 8% tax (`price * 1.08`).

* The total price should be formatted as a dollar amount (ex: 4.20).

* In a separate file, use mocha and chai to test the function. It should return the proper total for a given price if the price is a number or throw an error if price is not a number. 

*/

var calculateTax = function(price) {
  	if (typeof price !== "number"){
	  	throw new Error("Input must be a number");
  	} 
	
	let priceWithTax = (price * 1.08).toFixed(2);
  	console.log(typeof priceWithTax);
  	return parseFloat(priceWithTax);
};

module.exports = calculateTax;
