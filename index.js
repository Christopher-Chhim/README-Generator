// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  message: 'What is your github user name?',
  name: 'username',
},
{
  type: 'email',
  message: 'What is your email address?',
  name: 'email',
},
{
  type: 'title',
  message: 'What is your project title?',
  name: 'title',
},
{
  type: 'description',
  message: 'What is your project description?',
  name: 'description',
},
{
  type: 'list',
  message: 'What is your project table of contents?',
  name: 'tableOfContents',
  choices: ["installation", "usage", "credits", "license"]
},
{
  type: 'input',
  message: 'What do you need to install?',
  name: 'installation',
},
{
  type: 'input',
  message: 'What is the purpose of this project?',
  name: 'usage',
},
{
  type: 'list',
  message: 'What is the license of this project?',
  name: 'license',
  choices: ["MIT", "GPLv3", "Apache 2.0", "BSD 3-Clause", "Artistic 2.0"]
},
{
  type: 'input',
  message: 'What command should be run to run tests?',
  name: 'tests',
},
{
  type: 'input',
  message: 'What does the user need to know about contributing to the repo?',
  name: 'contributing',
},
];


  

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("Sample-README.md", data, (err) => {
        err ? console.log(err) : console.log('Successfully created READ.md file!')
    });
  }


// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      console.log("Generating readme...")
      const readMe = generateMarkdown(data)
      writeToFile(readMe);
    })
}

// Function call to initialize app
init();