
const uniqueProp = function(member){
  let  output = ''
    switch (member.getRole()){
        case "Manager":
            output = `Office Number: ${member.officeNum}`
            break
        case "Intern":
            output = `School: ${member.school}`
            break
        case "Engineer":
             output = `Github Username: ${member.getGithub()}`
          break} 
          return output
    }



const makeMember = function(member){
    console.log(member)
    return ` <div class = "card">
             <div class = "card-body">
              <h5 class = "card-title">${member.name}</h5>
              <div class = "card-text">
             <ul><li>Role: ${member.getRole()}</li> 
                <li>Email: ${member.email}</li>
                <li> ID : ${member.id}</li>
                <li>${uniqueProp(member)}<li/>
             <ul> 
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
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body> 
    ${employeeArray.map(makeMember).join('')}

</body>
</html>
`
}



