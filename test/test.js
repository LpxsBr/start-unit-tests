
// test: add odd or even in a list of 0 to 9

// function that will be tested
const setOddOrEven = () => {
    let list = []
    for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            list.push("even")
        }
        if (i % 2 != 0) {
            list.push("odd")
        }
    }
    return list;
}


// test

const assert = require('assert');
console.clear()
describe("Odd or Even", () => {
    it("show if the result is correct",
        () => {
            let expected = [
                'even', 'odd'
            ]

            assert.equal(setOddOrEven()[0], expected[0])
        })
    it("show if the result is not corrent",
        () => {
            let expected = [
                'even', 'odd'
            ]

            assert.equal(setOddOrEven()[0] == expected[1], false)
        }
    )
})