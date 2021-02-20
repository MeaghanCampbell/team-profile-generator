const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')
const Intern = require('../lib/Intern')
const Engineer = require('../lib/Engineer')

function generateEmployees(employees) {
    // takes all managers out of employees array and loops through
    const managerOutput = employees.filter(employee => employee.getRole() === "Manager").map(mgr => managerCreate(mgr))
    const internOutput = employees.filter(employee => employee.getRole() === "Intern").map(int => internCreate(int))
    const engineerOutput = employees.filter(employee => employee.getRole() === "Engineer").map(eng => engineerCreate(eng))

    const htmlOutput = []
    htmlOutput.push(managerOutput)
    htmlOutput.push(internOutput)
    htmlOutput.push(engineerOutput)

function managerCreate(mgr) {
    return `
    <div class="col">
        <div class="card m-2 shadow mb-5 bg-light rounded">
            <div class="card-body bg-primary">
                <h5 class="card-title text-light">${mgr.getName()}</h5>
                <p class="card-text text-light">Manager</p>
            </div>
            <div class="bg-muted">
                <ul class="list-group list-group-flush m-4">
                    <li class="list-group-item">ID: ${mgr.getID()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${mgr.getEmail()}">${mgr.getEmail()}</a></li>
                    <li class="list-group-item">Phone: ${mgr.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
    </div> 
    `
}

function internCreate(int) {
    return `
        <div class="col">
            <div class="card m-2 shadow mb-5 bg-light rounded">
                <div class="card-body bg-primary">
                    <h5 class="card-title text-light">${int.getName()}</h5>
                    <p class="card-text text-light">Intern</p>
                </div>
                <div class="bg-muted">
                    <ul class="list-group list-group-flush m-4">
                        <li class="list-group-item">ID: ${int.getID()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${int.getEmail()}">${int.getEmail()}</a></li>
                        <li class="list-group-item">School: ${int.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div> 
        `
}

function engineerCreate(eng) {
    return `
    <div class="col">
        <div class="card m-2 shadow mb-5 bg-light rounded">
            <div class="card-body bg-primary">
                <h5 class="card-title text-light">${eng.getName()}</h5>
                <p class="card-text text-light">Engineer</p>
            </div>
            <div class="bg-muted">
                <ul class="list-group list-group-flush m-4">
                    <li class="list-group-item">ID: ${eng.getID()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${eng.getEmail()}">${eng.getEmail()}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${eng.getGithub()}">github.com/${eng.getGithub()}</a></li>
                </ul>
            </div>
        </div>
    </div> 
    `
}
return htmlOutput.join('')
}

function generateHTML(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <title>Portfolio Generator</title>
    </head>
    <body class="">
        
        <div class="container-fluid">
            <div class="row bg-danger">
                <h1 class="text-light text-center p-2">My Team</h1>
            </div>
            <div class="row d-flex justify-content-center m-4">
              ${generateEmployees(data)}
            </div>
        </div>
    
    </body>
    </html>
    `
}

module.exports = generateHTML





