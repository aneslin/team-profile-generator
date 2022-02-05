const managerData = [
  {
    type: "input",
    name: "name",
    message: "what is the Team Leader's Name?",
    validate: (managerName) => {
      if (managerName) {
        return true;
      } else {
        console.log("please enter a valid name");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "employeeId",
    message: "Enter Employee ID",
    validate: (id) => {
      if (parseInt(id)) {
        return true;
      } else {
        console.log("Please enter a valid numerical ID");
        return false;
      }
    },
  },
  
  
  {
    type: "input",
    name: "emailAddress",
    message: "Please enter an Email Address",
  },



  { type: "input", name: "officeNum", message: "Please enter Office Number" },
];

const engineerData = [
  {
    type: "input",
    name: "name",
    message: "what is the Engineer's Name?",
    validate: (managerName) => {
      if (managerName) {
        return true;
      } else {
        console.log("please enter a valid name");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "employeeId",
    message: "Enter Employee Id",
    validate: (id) => {
      if (parseInt(id)) {
        return true;
      } else {
        console.log("Please enter a valid numerical ID");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "emailAddress",
    message: "Please enter an Email Address",
  },

  { type: "input", 
    name: "github",
    message: "Please enter Engineer's github user name" }
];


const internData = [
    {
      type: "input",
      name: "name",
      message: "what is the Interns's Name?",
      validate: (managerName) => {
        if (managerName) {
          return true;
        } else {
          console.log("please enter a valid name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "employeeId",
      message: "Enter Employee Id",
      validate: (id) => {
        if (parseInt(id)) {
           
          return true;
        } else {
          console.log("Please enter a valid numerical ID");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "emailAddress",
      message: "Please enter an Email Address",
    },
  
    { type: "input", 
      name: "school",
      message: "Please enter Intern's scchool" }
];




module.exports = { managerData: managerData, 
                   engineerData: engineerData,
                   internData: internData };
