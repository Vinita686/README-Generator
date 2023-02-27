// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#licence)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [GitHub](#github)
  - [E-mail](#email)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${licenseBadge(data)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Github
  ${data.github}

  ## Email
  ${data.email}

`;
}

// function for licence badge
function licenseBadge(data) {
  const typeOfLicense = data.license[0];
  let licenseEl = "";
  if (typeOfLicense == "MIT") {
  licenseEl = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
};
return licenseEl
}
module.exports = generateMarkdown;
