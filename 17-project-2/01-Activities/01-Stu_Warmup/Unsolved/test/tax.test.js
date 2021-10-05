var expect = require("chai").expect;
var calculateTax = require("../tax");

// Write tests for the calculateTax function here
describe("Tax", function() {
	it("should return the input * 1.08", function() {
		let result = calculateTax(1);
		expect(result).to.equal(1.08);
	})

	it("should throw an error if not a number", function() {
		
		var testString = function() {
			calculateTax("A");
		};

		expect(testString).to.throw(Error);
	})
})