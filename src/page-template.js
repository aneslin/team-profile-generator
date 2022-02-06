
const uniqueProp = function(member){
  let  output = ''
    switch (member.getRole()){
        case "Manager":
            output = `Office Number: ${member.officeNumber}`
            break
        case "Intern":
            output = `School: ${member.school}`
            break
        case "Engineer":
             output = `Github: ${member.getGithub()}`
          break
        
          default:
          output = "a problem"
        }
          return output
    }



const makeMember = function(member){
   
    return `<div class = "col"> 
            <div class = "card h-100 shadow-sm">
             <div class = "card-body">
              <h5 class = "card-header text-center bg-dark text-light">${member.name}</h5>
              <div class = "card-text mt-1">
             <ul><li>Role: ${member.getRole()}</li> 
                <li>Email: ${member.email}</li>
                <li> ID : ${member.id}</li>
                <li>${uniqueProp(member)}<li/>
             <ul> 
             </div>
             </div>
             </div>
             </div> `
}

module.exports = templateData => {
    const employeeArray = templateData
    console.log(templateData)
return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Team Organization</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body> 
<div class = "row  no-gutters">
    <header class = "h-25"> 
    <h1 class = "display-3">Team Organization</h1>
    </header>
    <main class="col-12  d-flex justify-content-center">
    <div class="m-5 row justify-content-around">
    ${employeeArray.map(makeMember).join('')}
    </div>
    </main>
</div>
</body>
</html>
`
}



