const CalculationOperations = require('../src/calculator');

describe("Calculation TestCases", () => {
    test("Add 2 numbers", () => {

    //Call function of Add
    var sum = CalculationOperations.Add(1,2)

   // assertions
    expect(sum).toBe(3);
});

    test("Subtract 2 numbers", () => {

    //Call function of Subtract
    var subtract = CalculationOperations.subtract(10,2)

   // assertion
    expect(subtract).toBe(8);

});
    test("Subtract 2 numbers with negative result", () => {

    //Call function of Subtract
    var subtract = CalculationOperations.subtract(1,7)

   // assertion
    expect(subtract).toBe(-6);

});

    test("Multiple 2 numbers", () => {

   // Call function of Subtract
    var multiple = CalculationOperations.multiple(2,8)

   // assertion
    expect(multiple).toBe(16);
});

    test("Divide 2 numbers", () => {

  // Call function to divide the number
    var divide = CalculationOperations.divide(24,8)

  // assertion
    expect(divide).toBe(3);
});

test("0 divided ", () => {

    // Call function to divide the number
    var divide = CalculationOperations.divide(0,8)

    // assertion
    expect(divide).toBe(0);
});

test("Divide with 0", () => {

    // Call function to divide the number
    var divide = CalculationOperations.divide(8,0)
    // assertion
    expect(divide).toMatch("Cannot divide by zero");
});

test("Square number", () => {

    // Call function to square the number
    var square = CalculationOperations.square(6)
    // assertion
    expect(square).toBe(36);
});

test("exponentiation a to b times", () => {
    // Call function to exponentiation 
    var exponentiation = CalculationOperations.exponentiation(2,5)
    // assertion
    expect(exponentiation).toBe(32);
});

test("exponentiation a to 0 times", () => {
    // Call function to exponentiation
    var exponentiation = CalculationOperations.exponentiation(5,0)
    // assertion
    expect(exponentiation).toBe(1);
});

test("exponentiation 1 to b times", () => {
    // Call function to exponentiation
    var exponentiation = CalculationOperations.exponentiation(1,10)
    // assertion
    expect(exponentiation).toBe(1);
});







})