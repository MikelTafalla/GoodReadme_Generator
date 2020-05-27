function generateMarkdown(data) {
  return `
# ${data.Title}
\n${data.badge}
\n${data.Description}

# Table of Contents

* [Installation](#installation)
* [Instructions](#instructions)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Acknowledgement](#acknowledgement)
* [Author](#author)

## Installation
> ${data.Installation}
## Instructions
> ${data.Usage}
## License 
${data.printLicense} 
## Contributors
${data.contributorsUrlString}
## Tests
${data.tests}
## Acknowledgement
${data.Acknowledgedstring}

## Author 
\n![ProfileImage](${data.avatar_url})

\n**${data.Username}**
\nEmail: ${data.email}
\nLocation: ${data.location}
\nGitHub: ${data.html_url}

`;
}

module.exports = generateMarkdown;

