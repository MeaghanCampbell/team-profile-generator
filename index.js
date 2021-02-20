const inquirer = require('inquirer')
const fs = require('fs')
const generateHTML = require('./src/generateHTML')

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = []

const addPerson = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter employee name.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter valid employee name.')
                    return false
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'Please select employee role.',
            choices: ['Engineer', 'Manager', 'Intern']
            
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter employee ID number.',
            validate: idInput => {
                if (idInput) {
                    return true
                } else {
                    console.log('Please enter a valid ID number.')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter employee email address.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter valid email address.')
                    return false
                }
            }
        },
    ])
    .then(data => {
        if (data.role === 'Manager') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'phone',
                    message: 'Please enter managers phone number.'
                }
            ])
            .then(answer => {
                const newManager = new Manager(data.name, data.id, data.email, answer.phone)
                employees.push(newManager)
            })
        } else if (data.role === "Engineer") {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: 'Please enter engineers github username.'
                }
            ])
            .then(answer => {
                const newEngineer= new Engineer(data.name, data.id, data.email, answer.github)
                employees.push(newEngineer)
            })
        } else if (data.role === "Intern") {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: 'What school did you intern attend?'
                }
            ])
            .then(answer => {
                const newIntern= new Intern(data.name, data.id, data.email, answer.school)
                employees.push(newIntern)
            })
        }
    })
    .then(data => {
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirmAnotherEmployee',
                message: 'Would you like to enter another employee?',
                default: false
            },
        ])
        .then(data => {
            if (data.confirmAnotherEmployee) {
                addPerson()
            } else {
                generateHTML(employees)
                fs.writeFile('./dist/index.html', generateHTML(employees), err => {
                    if (err) {
                        return console.log(err)
                    } 
                    console.log('Success! Check out the dist folder to view your file')
                })
            }
        })
    })
}

addPerson()
