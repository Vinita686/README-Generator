

// // function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {
   const fs = require("fs");
// const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];

inquirer.prompt([
  {
    type: "input",
    message: "What is the Title of your project?",
    name: "title",
  },
   {
       type: "input",
       message: "What is a good Description of your project?",
       name: "description", 
        },
     {
       type: "input",
       message: "Instructions for installation?",
       name: "installation",
        },
     {
        type: "input",
        message: "What is the usage of your application?",
        name: "usage",
        },
      {
         type: "checkbox",
         message: "Which license you want for Your Repo?",
         choices: ["MIT", "Apache 2.0", "GPLv3", "Other"],
         name: "license",
        },

    
    ])
    .then((response) => fs.writeFile('README.md', generateMarkdown(response), (error) =>
    error ? console.error(error) : console.log(`Success!`))
    );

}

// function call to initialize program
init();
