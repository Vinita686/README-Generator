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
  - [Questions](#github)


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
  This Application is under ${data.license} License

  ## Questions
  GitHub Link: ${data.github}

  E-mail: ${data.email} `;
}

// function for licence badge
function licenseBadge(data) {
  const typeOfLicense = data.license[0];
  let licenseEl = "";
  if (typeOfLicense == "MIT") {
  licenseEl = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  }
  if (typeOfLicense == "Apache 2.0") {
    licenseEl = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
  }
  if (typeOfLicense == "GPL v3"){
    licenseEl = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
  }
  if (typeOfLicense == "MPL 2.0") {
    licenseEl = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"
  }
  return licenseEl
};
module.exports = generateMarkdown;
