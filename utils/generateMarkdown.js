function generateMarkdown(data) {
  return `
# ${data.Title} 
${data.Description}

# Table of Contents

* [Installation](#installation)
* [Instructions](#instructions)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Author](#author)

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
## Author 
![ProfileImage](${data.avatar_url})
**${data.Username}**
Email: ${data.email}
Location:${data.location}
GitHub: ${data.url}

`;
}

module.exports = generateMarkdown;


// Incluir badge
// investigar axios para hacer get the github users
// Romper respuesta de contributors en individual
