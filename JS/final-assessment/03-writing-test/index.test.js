import {test} from 'node:test'
import assert from 'node:assert'
import { sum } from './index.js'

test('This should be good program', () => {
    const bilA = 1
    const bilB = 1

    const value = sum(bilA, bilB)

    const correct = 2
    assert.equal(value, correct)
})

test('if a is not a number', () => {
    const bilA = '5'
    const bilB = 5
    
    const value = sum(bilA, bilB)
    const correct = 55
    assert.equal(value, correct)
})

test('if b is not a number', () => {
    const bilA = 5
    const bilB = '5'

    const value = sum(bilA, bilB)
    const correct = 55
    assert.equal(value, correct)
})
    


