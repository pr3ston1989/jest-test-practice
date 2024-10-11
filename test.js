const capitalize = require('./capitalize')

test('capitalize first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('one two three')).toBe('One two three');
    expect(capitalize('HELLO')).toBe('Hello');
    expect(capitalize('ONE two THreE')).toBe('One two three');
    expect(capitalize('Hello')).toBe('Hello')
})

const reverseString = require('./reverse')

test('reverse given string', () => {
    expect(reverseString('Hello')).toBe('olleH');
    expect(reverseString('Good morning')).toBe('gninrom dooG');
    expect(reverseString('one two three')).toBe('eerht owt eno')
})

const calculator = require('./calculator')

test('addition', () => {
    expect(calculator.add(3, 4)).toBe(7)
    expect(calculator.add(12, 59)).toBe(71)
})

test('substraction', () => {
    expect(calculator.subtract(9, 3)).toBe(6)
    expect(calculator.subtract(100, 45)).toBe(55)
    expect(calculator.subtract(4, 12)).toBe(-8)
})

test('multiplication', () => {
    expect(calculator.multiply(0, 1)).toBe(0)
    expect(calculator.multiply(2, 3)).toBe(6)
    expect(calculator.multiply(10, 9)).toBe(90)
})

test('division by 0', () => {
    expect(() => {
        calculator.divide(5, 0)
    }).toThrow("Cannot divide by zero")
})

test('division', () => {
    expect(calculator.divide(5, 7)).toBeCloseTo(0.714)
    expect(calculator.divide(4, 2)).toBe(2)
})

const caesarCipher = require('./cipher')

test('Ceasar cipher', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

const analyzeArray = require('./analyzeArray')

test('Analyze array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     });
     expect(analyzeArray([1,5,14,20,40,10,3,7])).toStrictEqual({
        average: 12.5,
        min: 1,
        max: 40,
        length: 8
     });
     expect(analyzeArray()).toStrictEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 0
     });
     expect(analyzeArray([])).toStrictEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 0
     });
})