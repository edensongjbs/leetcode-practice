const { test, expect } = require('@jest/globals')
const hiCal = require('./interview-cake')
// const jest = require('jest')

test('hiCal returns condensed meetings', () => {
    let testCal =   [
        { startTime: 0,  endTime: 1 },
        { startTime: 3,  endTime: 5 },
        { startTime: 4,  endTime: 8 },
        { startTime: 10, endTime: 12 },
        { startTime: 9,  endTime: 10 },
    ]
    let expResult = [
        { startTime: 0, endTime: 1 },
        { startTime: 3, endTime: 8 },
        { startTime: 9, endTime: 12 },
    ]
    expect(hiCal(testCal)).toEqual(expResult)
})