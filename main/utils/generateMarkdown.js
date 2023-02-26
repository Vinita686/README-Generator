// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#licence)
  - [Contributing](#contribution)
  - [Tests](#test)
  - [Qustions](#qustions)

`;
}

module.exports = generateMarkdown;
