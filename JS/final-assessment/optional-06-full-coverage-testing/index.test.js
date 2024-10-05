import {test} from 'node:test'
import assert from 'node:assert'
import sum from './index.js'

test("This should be no Error", () => {
    const a = 1
    const b = 1

    const value = sum(a, b)
    const correct = 2

    assert.equal(value, correct)
})

test('if a is 0', () => {
    const a = 0
    const b = 5

    const value = sum(a, b)
    const correct = 5

    assert.equal(value, correct)
})

test("if b is 0", () => {
    const a = 5
    const b = 0

    const value = sum(a, b)
    const correct = 5
    assert.equal(value, correct)
})

test("if a b is 0", () => {
    const a = 0
    const b = 0

    const value = sum(a, b)
    const correct = 0
    assert.equal(value, correct)
})
test('if a < 0', () => {
    const a = -5
    const b = 6

    const value = sum(a, b)
    const correct = 0
    assert.equal(value, correct)
})

test('if b < 0', () => {
    const a = 5
    const b = -6

    const value = sum(a, b)
    const correct = 0
    assert.equal(value, correct)
})   

test('If a is not a number', () => {
    const a = '1'
    const b = 1

    const value = sum(a, b)
    const correct = 0
    assert.equal(value, correct)
})

test('if b is not a number', () => {
    const a = 1
    const b = '1'

    const value = sum(a, b)
    const correct = 0
    assert.equal(value, correct)
})