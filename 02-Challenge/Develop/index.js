// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your repository?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your repository?',
    },
    {
        type: 'list',
        name: 'table-of-contents',
        message: 'What are your table of contents?',
    },
    {
        type: 'list',
        name: 'installation',
        message: 'List your steps on installation.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this application?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license are you using?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who contributed to this application?',
    },
    {
        type: 'list',
        name: 'tests',
        message: 'List testing instructions',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Where can you be contacted for questions about this repository?',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

