// import chai; declare expect constant
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer.js');

// unit tests for fizzBuzzer function
describe('should display the correct fizz buzz word', function() {

  // test the normal case: fizz-buzz 
  it('should return fizz-buzz for numbers divisible by 5 and by 3', function() {
    const normalCases = [15, 30, 45];
    normalCases.forEach(input => {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('fizz-buzz');
    })
  })

  it('should return buzz for numbers divisible by 5 and not divisible by 3', function() {
    const normalCases = [5, 10, 20];
    normalCases.forEach(input => {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('buzz');
    })
  })

  it('should return fizz for numbers divisible by 3 and not divisible by 5', function() {
    const normalCases = [3, 6, 9];
    normalCases.forEach(input => {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('fizz');
    })
  })

  it('should return input number if not divisible by 3 or 5', function() {
    const normalCases = [1, 2, 4];
    normalCases.forEach(input => {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal(input);
    })
  })

  it('should raise error if args not numbers', function() {
    const badCases = ["hi", null, undefined, true];
    badCases.forEach(input => {
      expect(function(){
        fizzBuzzer(input).to.throw(Error);
      })
    })
  })

});