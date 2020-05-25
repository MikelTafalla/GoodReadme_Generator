function generateMarkdown(data) {
  return `
# ${data.Title} 
${data.Description}

# Table of Contents
\n* [Installation](#installation)
\n* [Instructions](#instructions)
\n* [License](#license)
\n* [Contributors](#contributors)
\n* [Tests](#tests)
\n* [Author](#author)

## Installation
${data.Installation}
## Instructions
${data.Usage}
## License 
This project is licensed under the ${data.License} - see the ${data.LicenseURL} file for details
## Contributors
${data.ContributorsGitUserName}
## Tests
${data.tests}


`;
}

module.exports = generateMarkdown;


// Incluir badge
// investigar axios para hacer get the github users
// Romper respuesta de contributors en individual
