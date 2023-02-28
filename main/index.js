
// function to initialize program
function init() {
   const fs = require("fs");
   const inquirer = require("inquirer");
   const generateMarkdown = require("./utils/generateMarkdown");

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
      message: "Which license do you want for Your Repo?",
      choices: ["MIT", "Apache 2.0", "GPL v3", "MPL 2.0"],
      name: "license",
      },
   {
      type: "input",
      message: "What are the contribution guidelines for your project?",
      name: "contributing",
      },
   {
      type: "input",
      message: "What are the test instructions for your project?",
      name: "tests",
      },
   {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
      },
   {
      type: "input",
      message: "What is your Email address?",
      name: "email",
      }
   ])
   .then((response) => fs.writeFile('README.md', generateMarkdown(response), (error) =>
   
   error ? console.error(error) : console.info(`Success!`))
   );

}

// function call to initialize program
init();
