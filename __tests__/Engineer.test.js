const Engineer = require('../lib/Engineer')

let testEngineer = new Engineer('Jane', 3, 'test@test.com', "JaneDoe")

test('check if name is string', () => {
    expect(testEngineer.name).toEqual(expect.any(String));
})

test('check if ID is a Number', () => {
    expect(testEngineer.id).toEqual(expect.any(Number))
})

test('check if email is a string', () => {
    expect(testEngineer.email).toEqual(expect.any(String))
})

test('check if github is a string', () => {
    expect(testEngineer.github).toEqual(expect.any(String));
})