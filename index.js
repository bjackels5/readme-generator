// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    /*
    project title
    Description
    Table of Contents
    Installation - installation instructions
    Usage - usage information
    License
    Contributing - contribution guidelines
    Tests - test instructions
    Questions - contact me with questions:
        GitHub user name and link to GitHub profile
        email address
    */
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project.');
                return false;
            }
        }
    }
];

const promptProject = () => inquirer.prompt(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("going to create the file ", fileName, " with data:\n", data);
}

// TODO: Create a function to initialize app
function init() {
    promptProject()
    .then(projectData => {
        return generateMarkdown(projectData);
    })
    .then(readmeMD => {
        return writeToFile("./dist/README.md", readmeMD);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    })
;
}

// Function call to initialize app
init();

