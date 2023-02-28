// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${licenseBadge(data)}

  ## Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  This Application is under ${data.license} License.

  ## Questions
  * Here is my GitHub Link : [My GitHub](${data.github})

  * If you have some additional questions you can reach me at : ${data.email} `;
}

// function for generating licence badge
function licenseBadge(data) {
  let licenseEl = "";
  if (data.license == "MIT") {
  licenseEl = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  }
  if (data.license == "Apache 2.0") {
    licenseEl = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
  }
  if (data.license == "GPL v3"){
    licenseEl = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
  }
  if (data.license == "MPL 2.0") {
    licenseEl = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"
  }
  return licenseEl
};
module.exports = generateMarkdown;
