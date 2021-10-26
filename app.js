// Requiring Inquirer, fs and bring in my different possible team roles.
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const team = [];

    renderTeam()

function tophtml() {
    const html =
        `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <title>MY TEAM</title>
    </head>

    <body>
    <ul class="nav justify-content-center">
        <li class="nav-item">
            <a class="nav-link disabled">MY TEAM</a>
         </li>
    </ul>
        <div class="container">
        <div class="row">`;

    fs.writeFile('./output/renderedteam.html', html, (err) => {
        err ? console.log(err) : console.log('')
    });
}


function renderTeam() {
    inquirer.prompt([
        {
            type: "Input",
            message: "Enter team member's name.",
            name: "name",
        },
        {
            type: "input",
            message: "What is the team members ID?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the team members Email address?",
            name: "email",
        },
        {
            type: "list",
            message: "What is the team member's role?",
            name: 'answerrole',
            choices: ['Manager', "Engineer", "Intern"],
        }
    ])
        .then(function (answers) {
            if (answers.answerrole === "Engineer") {
                engineerQs(answers);
            } else if (answers.answerrole === "Intern") {
                internQs(answers);
            } else {
                managerQs(answers);
            }



            function engineerQs(baseAnswers) {
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What is their Github username?",
                        name: "answerGithub",
                    },
                    {
                        type: "confirm",
                        message: "Would you like to add another Employee?",
                        name: "answerAddAnother",
                    },
                ]).then((answers) => {
                    let Engineer = new Engineer(baseAnswers.answername, baseAnswers.answerid, baseAnswers.answeremail, answers.answerGithub)
                    let html =
                `<div class="col-3">
                    <h2>Engineer:</h2>
                    <p>Name: ${answers.answername}</p>
                    <p>Employee ID: ${answers.answerID}</p>
                    <p>Email Address: ${answers.answerEmail}</p>
                    <p>Office Number: ${answers.answerGithub}</p>
                </div>`
                        fs.appendFile('./output/renderedtean.html', html, (err) => {
                        err ? console.log(err) : console.log('html created')
                        team.push(Engineer);
                        });
                    if (answers.answerAddAnother === false) {
                        renderTeam()
                    } else {
                        console.log('rendered');
                    }
                })
            }

            function internQs(baseAnswers) {
                inquirer.prompt([
                    {
                        type: "input",
                        message: "Where did they go to school?",
                        name: "answersSchool",
                    },
                    {
                        type: "confirm",
                        message: "Would you like to add another Employee?",
                        name: "answerAddAnother",
                    },
                ]).then((answers) => {
                    let Intern = new Intern(baseAnswers.answerName, baseAnswers.answerID, baseAnswers.answerEmail, answers.answersSchool)
                    let html =
                `<div class="col-3">
                    <h2>Intern:</h2>
                    <p>Name: ${answers.Name}</p>
                    <p>Employee ID: ${answers.ID}</p>
                    <p>Email Address: ${answers.Email}</p>
                    <p>School: ${answers.School}</p>
                </div>`
                    fs.appendFile('./output/renderedtean.html', html, (err) => {
                        err ? console.log(err) : console.log('html rendered')
                        team.push(Intern);
                    });
                    if (answers.answerAddAnother === true) {
                        team.push(Intern);
                        renderTeam()
                    } else {
                        console.log('rendered')
                    }

                })
            }

            function managerQs(baseAnswers) {
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What is their office number?",
                        name: "answerOfficeNumber",
                    },
                    {
                        type: "confirm",
                        message: "Would you like to add another Employee?",
                        name: "answerAddAnother",
                    },
                ]).then((answers) => {
                    let Manager = new Manager(baseAnswers.answerName, baseAnswers.answerID, baseAnswers.answerEmail, answers.answerOfficeNumber)
                    let html =
                `<div class="col-3">
                    <h2>Managerr:</h2>
                    <p>Name: ${answers.Name}</p>
                    <p>Employee ID: ${answers.ID}</p>
                    <p>Email Address: ${answers.Email}</p>
                    <p>Office Number: ${answers.OfficeNumber}</p>
                </div>`
                        fs.appendFile('./output/renderedtean.html', html, (err) => {
                            err ? console.log(err) : console.log('html rendered')
        });                
                  if (answers.answerAddAnother === true) {
                        renderTeam()
                        team.push(Manager);
                    } else {


                        team.push(Manager);
                    }
                })
            }
        })
};

function init() {
    tophtml();
}

init();