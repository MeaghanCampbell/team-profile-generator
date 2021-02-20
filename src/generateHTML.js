const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')
const Intern = require('../lib/Intern')
const Engineer = require('../lib/Engineer')

function generateEmployees(data) {
    if (role === "Manager") {
        return `
        <div class="col">
            <div class="card m-2 shadow mb-5 bg-light rounded">
                <div class="card-body bg-primary">
                    <h5 class="card-title text-light">${getName(data.name)}</h5>
                    <p class="card-text text-light">Manager</p>
                </div>
                <div class="bg-muted">
                    <ul class="list-group list-group-flush m-4">
                        <li class="list-group-item">ID: ${getID(data.id)}</li>
                        <li class="list-group-item">Email: ${getEmail(data.email)}</li>
                        <li class="list-group-item">${'phone number here'}</li>
                    </ul>
                </div>
            </div>
        </div> 
        `
    } else if (role === "Engineer") {
        return `
        <div class="col">
            <div class="card m-2 shadow mb-5 bg-light rounded">
                <div class="card-body bg-primary">
                    <h5 class="card-title text-light">${getName(data.name)}</h5>
                    <p class="card-text text-light">Engineer</p>
                </div>
                <div class="bg-muted">
                    <ul class="list-group list-group-flush m-4">
                        <li class="list-group-item">ID: ${getID(data.id)}</li>
                        <li class="list-group-item">Email: ${getEmail(data.email)}</li>
                        <li class="list-group-item">${'github goes here'}</li>
                    </ul>
                </div>
            </div>
        </div> 
        `
    } else if (role === "Intern") {
        return `
        <div class="col">
            <div class="card m-2 shadow mb-5 bg-light rounded">
                <div class="card-body bg-primary">
                    <h5 class="card-title text-light">${getName(data.name)}</h5>
                    <p class="card-text text-light">Intern</p>
                </div>
                <div class="bg-muted">
                    <ul class="list-group list-group-flush m-4">
                        <li class="list-group-item">ID: ${getID(data.id)}</li>
                        <li class="list-group-item">Email: ${getEmail(data.email)}</li>
                        <li class="list-group-item">${'school'}</li>
                    </ul>
                </div>
            </div>
        </div> 
        `
    }
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





