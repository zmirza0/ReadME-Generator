// TODO: Create a function that returns a license badge based on which license is passed in
const { table } = require("console");
const { title } = require("process");
const licenseChoices = ['MIT', 'Apache 2.0', 'GPLv3', 'ISC', 'none']

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license===licenseChoices[0]){
    return `[![license](https://img.shields.io/badge/license-${license}-red)](./LICENSE)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===licenseChoices[0]){
    return `[${licenseChoices[0]}](https://opensource.org/licenses/MIT)`
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

   ## Description
  ${data.description}
   ## Table of Contents (Optional)
  ${data.tableofc}
   ## Installation
  ${data.installation}
   ## Usage
  ${data.usage}
   ## Credits
  ${data.contributions}
   ## License
  ${data.license}
   ## Badges
   ${renderLicenseBadge(data.license)}
   ## Tests
  ${data.tests}
   ## Contact
   My github username is ${data.github} and you can also contact me at ${data.email} if you have any questions.
`;
}

module.exports = generateMarkdown;



