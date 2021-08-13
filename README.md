Module 9 challenge


# Professional README Generator Starter Code

[How to create a Professional README](./readme-guide.md)


User Story
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

Getting Started
Here are some guidelines to help you get started:

Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.

Make sure that your repo includes a package.json with the required dependencies. You can create one by running npm init when you first set up the project, before installing any dependencies.

Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.






By completing this module, you'll learn how to:

Build interactive command-line applications that process user input

Explain modularization and how it relates to npm and the Node.js standard library

Initialize new Node.js projects with npm, and install and import dependencies

Explain the importance and usefulness of ES6+ concepts such as let, const, and arrow functions

Handle asynchronicity with callbacks and Promises

---

# 9.1
By the end of this lesson, we'll do the following:

Identify the purpose Node.js serves in modern web development and when to use it.
Node.js, also known simply as Node, is a versatile runtime environment used to develop many types of projects, including build tools like document generators, servers that host websites or databases, and chat rooms.

Create and execute a Node.js application from the command line.

Outline the differences between the JavaScript syntax we've used and the new ES6 features in order to understand the purpose they serve in JavaScript.

That Node.js is a runtime environment popular for building applications that run outside of the browser

How to create and execute an application build with Node.js

What JavaScript ES6 (ECMAScript 6) is, how to use some of its features, and how they can benefit us

---

# 9.2
Using ES6 arrow functions and assignment destructuring to write cleaner code.

Researching documentation to learn how to use new tools like the core library in Node.js.

Requiring and exporting modules to use Node.js's core library and modularize the application.

---

# 9.3
Understand the purpose of npm and navigate its ecosystem.

Learn npm commands to initiate projects and install packages using the command-line utility.

Understand how to use inquirer and its Promise.

Search the npm registry to find stable long-term solutions.

Install packages from npm and learn the purpose of the package.json, package-lock.json, and node_modules assets.

Research documentation to find out how to use packages like inquirer.

Chain inquirer's Promises to control the flow of the application when prompting users.

Validate user answers with inquirer and conditionally prompt users based on answers.

--- 

# 9.4
Learn how to work with data more efficiently, using new JavaScript features and array methods.

Use Node.js’s modularity to keep the functionality clean and easy to read.

Used object destructuring and learned about the rest and spread operators to help keep the data organized.

Broke a function into multiple pieces to make it easier to read the code for a specific section of the HTML template.

Leveraged HTML elements by using new array methods .filter() and .map() to take input data and return HTML data with it.

---

# 9.5
In the next and final lesson, we’ll revisit the fs package and handle asynchronous JavaScript to create functionality for packaging up the portfolio’s page and style sheet so that it looks nice and complete!

Understand how to use the fs module to copy files from one location to another.

Create JavaScript Promises to handle asynchronous functionality in a cleaner way.

To recap this lesson:

We now know how to use the fs module to copy files from one location to another.

We've created our own JavaScript Promises to handle asynchronous functionality in a cleaner fashion.

And to recap the entire module:

We understand the purpose of Node.js and some of its uses in web development.

We know how to create and execute a Node.js application.

We learned a bit about the process for new features to be introduced into JavaScript and who is in charge of it (Ecma).

We can use new means of creating variables and functions in JavaScript.

We know a new way to concatenate variable data into strings using template literals along with some other new ES6 features such as destructuring and spread/rest operators.

We can modularize the Node.js applications to enhance code readability and reusability.

We know that Node.js has built-in tools and how to use them if we need to, such as the fs library.

We understand how and why to use the npm init command to create Node.js packages that are dependent on outside tools and libraries such as Inquirer.

We can use new array methods with object destructuring and arrow function implicit returns to create succinct and readable code.

We can identify where the asynchronous functionality can be cleaned up and how to turn callback functions into JavaScript Promise objects.