# README-Generator
using npm-inquirer

## Description
This project all about creating a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.
This allows the developer to devote more time to working on the project.

## User Story
As a developer, I want a README generator so that I can quickly create a professional README.md file for a new project.

## Installation
- You will need to install Node.js.
- After installing Node.js you will need to install npm package by typing 'npm init -y' in the terminal.
- Then you can insall the Inquirer package by typing the command 'npm i inquirer'.

## Usage
- Once you have done all the required installations, Navigate to the application folder in the terminal.
- Run the application by typing the command 'node index.js'.
- Answer all the questions prompted, and a README.md file will be generated to your current working directory.

## Main Features
1. This is a command-line Application which accepts user inputs.
  - A user is prompted for information about the application's repository and a high-quality, professional README.md is generated based on the answers provided.
  - When a user enters the project title then it is displayed as the title of the README.
  - When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests respectively.
  - When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.
  - When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile.
  - When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.
2. When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README.


## Submission 
- Here is the [walkthrough video](./main/assets/walkthrough_video.mp4) of the application.
- See the [Sample README](./main/assets/Sample_README.md_file.png) file.

## License
This Repository is under MIT license.
  

