const Intern = require('../lib/Intern')

let testIntern = new Intern('Jane', 3, 'test@test.com', "OSU")

test('check if name is string', () => {
    expect(testIntern.name).toEqual(expect.any(String));
})

test('check if ID is a Number', () => {
    expect(testIntern.id).toEqual(expect.any(Number))
})

test('check if email is a string', () => {
    expect(testIntern.email).toEqual(expect.any(String))
})

test('check if school is a string', () => {
    expect(testIntern.school).toEqual(expect.any(String));
})