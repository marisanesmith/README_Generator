// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

const generateReadme = (answers) =>

`# ${answers.title}
License: ${answers.license}

${answers.description}

Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contribution](#Contribution)
* [Tests](#Test)
* [License](#License)
* [Questions](#Questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
* ${answers.contribution}

## Tests
* ${answers.test}

## License
${answers.license}
You can find out more about the ${answers.license} license on the open source page [here](https://www.opensource.org/licenses/${answers.license})

## Questions

Please contact me via email if you have any questions about this application.

* GitHub Profile: [github.com/${answers.githubName}](github.com/${answers.githubName})

* Email: [${answers.email}](${answers.email})`;

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
    choices: ["MIT", "GPLv2", "Apache", "GPLv3", "BSD 3-clause"]
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
    const createReadme = generateReadme(answers);

    fs.writeFile('README.md', createReadme, (err) =>
    err ? console.log(err) : console.log('Successfully created README file!')
    );
});

  // TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();