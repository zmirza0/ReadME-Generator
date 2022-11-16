// TODO: Create a function that returns a license badge based on which license is passed in
const { table } = require("console");
const { title } = require("process");
const licenseChoices = ['MIT', 'Apache', 'GPLv3', 'ISC', 'none']

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license===licenseChoices[0]){
    return `[![license](https://img.shields.io/badge/license-${license}-red)](./LICENSE)`
  }

  else if (license===licenseChoices[1]){
    return `[![license](https://img.shields.io/badge/license-${license}-red)](./LICENSE)`
  }

  else if (license===licenseChoices[2]){
    return `[![license](https://img.shields.io/badge/license-${license}-red)](./LICENSE)`
  }

  else if (license===licenseChoices[3]){
    return `[![license](https://img.shields.io/badge/license-${license}-red)](./LICENSE)`
  }

  else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===licenseChoices[0]){
    return `[${licenseChoices[0]}](https://opensource.org/licenses/MIT)`
  } 

  else if (license===licenseChoices[1]){
    return `[${licenseChoices[1]}](https://www.apache.org/licenses/LICENSE-2.0)`
  } 

  else if (license===licenseChoices[2]){
    return `[${licenseChoices[2]}](https://www.gnu.org/licenses/gpl-3.0.en.html)`
  } 

  else if (license===licenseChoices[3]){
    return `[${licenseChoices[3]}](https://opensource.org/licenses/ISC)`
  } 

  else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents 
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributions](#contributions)
  5. [License](#license)
  6. [Tests](#tests)
  7. [Questions](#questions)







  ## Description
  ${data.description}
   ## Installation
  ${data.installation}
   ## Usage
  ${data.usage}
   ## Contribution guidelines 
  ${data.contributions}
   ## License
  ${renderLicenseLink(data.license)}
   ## Tests
  ${data.tests}
   ## Questions
   My github username is ${data.github} and you can also contact me at ${data.email} if you have any questions.
`;
}

module.exports = generateMarkdown;



