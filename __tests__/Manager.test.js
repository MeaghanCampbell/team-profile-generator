const Manager = require('../lib/Manager')

let testManager = new Manager('Jane', 3, 'test@test.com', "867-5309")

test('check if name is string', () => {
    expect(testManager.name).toEqual(expect.any(String));
})

test('check if ID is a Number', () => {
    expect(testManager.id).toEqual(expect.any(Number))
})

test('check if email is a string', () => {
    expect(testManager.email).toEqual(expect.any(String))
})

test('check if phone is a string', () => {
    expect(testManager.officeNumber).toEqual(expect.any(String));
})