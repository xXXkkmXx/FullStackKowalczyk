const {test,describe} = require("node:test")
const assert = require("node:assert")

const average = require("../utils/for_testing").average;

describe('average',()=>{
    test('of many is calculated right',()=>{
        assert.strictEqual(average([1, 2, 3, 4, 5, 6]),3.5);
    })
})