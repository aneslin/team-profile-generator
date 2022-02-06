const inquirer = require('inquirer')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const makePage = require('./src/page-template')
const {managerData, engineerData, internData} = require('./lib/questions')
const {writeFile, copyFile} = require('./utils/makefile')
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
              writeFile(makePage(employeeArray))
              copyFile()
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
    nextThing()
})


