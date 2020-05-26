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
> ${data.Installation}
## Instructions
> ${data.Usage}
## License 
This project is licensed under the ${data.License} - see ${data.LicenseURL} for details
## Contributors
\n ${data.ContributorsGitUserName}; [Github Repo](${Contributors_url})
## Tests
${data.tests}
## Author 
\n![ProfileImage](${data.avatar_url})
\n**${data.Username}**
\nEmail: ${data.email}
\nLocation: ${data.location}
\nGitHub: ${data.url}

`;
}

module.exports = generateMarkdown;


// Incluir badge
// investigar axios para hacer get the github users
// Romper respuesta de contributors en individual
