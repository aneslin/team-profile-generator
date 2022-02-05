const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')
const makePage = require('../src/page-template')
const {managerData, engineerData, internData} = require('./questions')
const employeeArray= []



const nextThing = () => {

    inquirer.prompt([
        {
            type:"list",
            name: "addAnother",
            message: "DO you want to add an Intern, engineer or are you done?",
            choices: ["Engineer", "Intern", "Finished"]
        }

    ]).then(results=> {
        switch(results.addAnother){
            case "Engineer":
                createEngineer()
            break;
            case "Intern":
                createIntern()
            break;
            default:
                console.log(makePage(employeeArray))
        }
        
    })
}

const createEngineer = function() {inquirer.prompt(engineerData)
    .then(engineerResults => {
        const engineer = new Engineer(
            engineerResults.name,
            engineerResults.employeeId,
            engineerResults.emailAddress,
            engineerResults.github
        )
        employeeArray.push(engineer)
        console.log(employeeArray)
        nextThing()
      
    })
}

const createIntern = function(){inquirer.prompt(internData)
    .then(internResults => {
        const intern = new Intern(
           internResults.name,
           internResults.employeeId,
           internResults.emailAddress,
           internResults.school
        )
        employeeArray.push(intern)
        console.log(employeeArray)
        nextThing()
    })}




const createManager = () => inquirer.prompt(managerData)
createManager().then(managerResults => {
    const manager = new Manager(
        managerResults.name,
        managerResults.employeeId,
        managerResults.emailAddress,
        managerResults.officeNum)

    employeeArray.push(manager)
    console.log(employeeArray)
    nextThing()
})




