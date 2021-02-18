// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">${answers.title}</h1>
    <p class="lead">${answers.description}.</p>
    <h3>Example heading <span class="badge badge-secondary">${answers.license}</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.githubName}</li>
      <li class="list-group-item">Email: ${answers.email}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

inquirer
.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'How would you describe your project to other users?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Explain how you would install this project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Explain how to use your application',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Include a guide on how others could contribute to your application or open source project.',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Create a guideline of instructions for how to test the application',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select from the list below which license you would like to use for your application',
        choice: ["MIT", "GPLv2", "Apache", "GPLv3", "BSD 3-clause"]
      },
      {
        type: 'input',
        name: 'githubName',
        message: 'Enter your GitHub username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address and a brief description with instructions on how someone can reach you with additional questions about the application.',
      },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });