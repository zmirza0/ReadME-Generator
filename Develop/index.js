// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('../utils/generateMarkdown');
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
        type: 'input',
        name: 'installation',
        message: 'List your steps on installation.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this application?',
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPLv3', 'ISC', 'none'],
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who contributed to this application?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'List testing instructions',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
  ]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, data, err => {
        if (err) {
            throw err
        } else {
        console.log('README created!')
        }
    });
};


// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
     writeToFile('readme.md', generateMarkdown(data));
     console.log(data)   
    }

    )
}

// Function call to initialize app
init();






