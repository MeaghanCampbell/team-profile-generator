const Employee = require('../lib/Employee')

let testEmployee = new Employee('Jane', 3, 'test@test.com')
  
test('check if name is string', () => {
    expect(testEmployee.name).toEqual(expect.any(String));
})

test('check if ID is a Number', () => {
    expect(testEmployee.id).toEqual(expect.any(Number))
})

test('check if email is a string', () => {
    expect(testEmployee.email).toEqual(expect.any(String))
})

