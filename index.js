//Create consts to call inquirer npm y fs that will use for the questionaire and to write the Readmefile
const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");

//Import generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown.js");

//create the array of questions
const questions = [
  { 
    type: "input",
    message: "What is your GitHub user name?",
    name: "Username"
  },
  { 
    type: "input",
    message: "What is your Project Title?",
    name: "Title"
  },
  { 
    type: "input",
    message: "Provide detail description:",
    name: "Description"
  },
  { 
    type: "input",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    name: "Installation"
  },
  { 
    type: "input",
    message: "Provide instructions for use:",
    name: "Usage"
  },
  {
    type: "input",
    message: "Provide only License name (Example: MIT):",
    name: "License"
  },
  {
    type: "input",
    message: "What is the License URL?",
    name: "LicenseURL"
  },
  {
      type: "input",
      message: "please enter github user names of the contributor if any (If there are mulitple contributor, seperate names with comma and no space!):",
      name: "ContributorsGitUserName"
  },
  {
      type: "input",
      message: "Provide examples on how to run tests:",
      name: "tests"
  }

];


//Function that will contain the fs module to create the ReadMe file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
    if (err) {
      console.log(err)
    }else {
      console.log("Success!")
    }
  });
 
}

//Display questions in command line. Async & await allow us to answer all questions first, store answers on UserResponse constant and retrieve them as an object

async function init() {
  console.log("Let's create your ReadMe")
  const UserResponse = await inquirer.prompt(questions);
 //Deconstruct object and create constants for each response
  const {Username, Title, Description, Installation, Usage, License, LicenseURL, ContributorsGitUserName, tests} = UserResponse;
  

 // Retrieving data from github user
  const GitHubInfo = await axios.get(`https://api.github.com/users/${Username}`);
  console.log(typeof GitHubInfo);
  console.log(GitHubInfo);
  const {data: {avatar_url, url, location, email}} = GitHubInfo
  console.log(avatar_url);
  console.log(location);

 //Call the generateMArkdown and input our responses
  const ReadmeSkeleton = generateMarkdown({Username, Title, Description, Installation, Usage, License, LicenseURL, ContributorsGitUserName, tests, avatar_url, url, location, email});


  //Call writetoFile function
  writeToFile("GeneratedReadme.md", ReadmeSkeleton);  

};


 
//Call function init()
init();
