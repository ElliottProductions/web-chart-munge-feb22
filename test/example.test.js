// IMPORT MODULES under test here:
import data from '../data.js';


const test = QUnit.test;


test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

function addItUp(bebop, jazz){
    const countMap = {};

    for (let cowboy of bebop) {

        const frequency = cowboy[jazz];

        if (countMap[frequency]) {

            countMap[frequency]++;
        } else {
            countMap[frequency] = 1;
        }

    }

    return countMap;
}

test('testing addItUp with purchase frequency', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = { Daily: 142,
        Monthly: 123,
        Never: 123,
        Often: 126,
        Once: 107,
        Seldom: 129,
        Weekly: 122,
        Yearly: 128 };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addItUp(data, 'purchase_frequency');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('testing addItUp with cool_factor', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = { 1: 109,
        2: 119,
        3: 99,
        4: 101,
        5: 93,
        6: 102,
        7: 101,
        8: 99,
        9: 82,
        10: 95 };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addItUp(data, 'cool_factor');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('testing addItUp with gender', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = { Agender: 17,
        Bigender: 14,
        Female: 457,
        Genderfluid: 18,
        Genderqueer: 11,
        Male: 448,
        'Non-binary': 24,
        Polygender: 11 };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addItUp(data, 'gender');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

