const inquirer = require('inquirer')
const fs = require('fs')
const generateHTML = require('./src/generateHTML')

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

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
        {
            type: 'confirm',
            name: 'confirmAnotherEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        },
    ])
    // function to generate HTML or add another Employee
    .then(data => {
        return generateHTML(data)
    })
    // function to write HTML file
    .then(
        function(data) {

            fs.writeFile('./dist/index.html', data, err => {
                if (err) {
                    return console.log(err)
                }
                console.log('Success! Check out the dist folder to view your file.')
            })
        }
    )
}

addPerson()
