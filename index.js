// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const validateInput = (str, message) => {
    if (str) {
        return true;
    } else {
        console.log(message);
        return false;
    }

}

// TODO: Create an array of questions for user input
const questions = [
    /*
    License
    */
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: theInput => validateInput(theInput, "A project title is required.")
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project: (Required)',
        validate: theInput => validateInput(theInput, "A project description is required.")
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions: (Required)',
        validate: theInput => validateInput(theInput, "Installation instructions are required.")
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information: (Required)',
        validate: theInput => validateInput(theInput, "Installation instructions are required.")
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide instructions for contributing to the project: (Required)',
        validate: theInput => validateInput(theInput, "Contribution instructions are required.")
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please provide test instructions: (Required)',
        validate: theInput => validateInput(theInput, "Test instructions are required.")
    },
    {
        type: 'input',
        name: 'ghUserName',
        message: 'What is your GitHub user name? (Required)',
        validate: theInput => validateInput(theInput, "Your GitHub user name is required.")
    },
    {
        type: 'input',
        name: 'ghLink',
        message: 'Provide the link to your GitHub user profile: (Required)',
        validate: theInput => validateInput(theInput, "The link to your GitHub profile is required.")
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is your email address? (Required)',
        validate: theInput => validateInput(theInput, "Your email address is required.")
    }
];

const promptProject = () => inquirer.prompt(questions);

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            // if there's an error, reject the Promise and send the error to the Promise's .catch() method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise an send the successful data to the .then() method
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

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
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    });
}

// Function call to initialize app
init();

