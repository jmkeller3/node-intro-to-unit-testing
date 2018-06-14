//import fizz-buzz
const fizzBuzzer = require('../fizzBuzzer');

//unit tests for our `adder` function
describe('fizzBuzzer', function() {
    //test the normal case
    it('it does fizzbuzz', function() {
        const normalCases = [
            {a: 15, expected: 'fizz-buzz'},
            {a: 5, expected: 'buzz'},
            {a: 3, expected: 'fizz'},
            {a: 2, expected: 2},
        ];
    
    //for each set of inputs, `fizzBuzzer` should produce the expected string
    normalCases.forEach(function(input) {
        const answer = fizzBuzzer(input.a);
        expect(answer).to.equal(input.expected);
        });
    });

    it('should raise error if arg not a number', function() {
        //range of bad inputs where not both are numbers
        const badInputs = [
            'a', '1', false
        ];
        //proves that an error is raised for bad inputs
        badInputs.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input);
            }).to.throw(Error);
        })
    })
})