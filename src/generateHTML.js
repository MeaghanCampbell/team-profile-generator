const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')
const Intern = require('../lib/Intern')
const Engineer = require('../lib/Engineer')

function generateEmployees(data) {
    return `
    <div class="col">
        <div class="card m-2 shadow mb-5 bg-light rounded">
            <div class="card-body bg-primary">
                <h5 class="card-title text-light">${'employee name here'}</h5>
                <p class="card-text text-light">${'employee role here'}</p>
            </div>
            <div class="bg-muted">
                <ul class="list-group list-group-flush m-4">
                    <li class="list-group-item">ID: ${'ID number here'}</li>
                    <li class="list-group-item">Email: ${'email here'}</li>
                    <li class="list-group-item">${'other info here'}</li>
                </ul>
            </div>
        </div>
    </div> 
    `
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





