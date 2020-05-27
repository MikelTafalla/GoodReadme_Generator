//Create consts to call inquirer npm, axios and fs that will use for the questionaire, fetching Github user's info and to write the Readmefile
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
    message: "Provide only the License name (Example: MIT):",
    name: "License"
  },
  {
    type: "input",
    message: "What is the License URL?",
    name: "LicenseURL"
  },
  {
    type: "input",
    message: "please enter github user names of the contributor if any (If there are mulitple contributors, seperate names with comma and no space!). If there are no contributors leave it blank:",
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

//Display questions in command line. Async & await allow us to answer all questions first, store answers on UserResponse constant and retrieve them as an object. Async & await will prevent <pending promises>.

async function init() {
  console.log("Let's create your ReadMe")
  const UserResponse = await inquirer.prompt(questions);
 //Deconstruct object and create constants for each response
  const {Username, Title, Description, Installation, Usage, License, LicenseURL, ContributorsGitUserName, tests} = UserResponse;
  

 // Retrieving data from user from github API
  const GitHubInfo = await axios.get(`https://api.github.com/users/${Username}`);
  console.log(GitHubInfo);
 // Deconstruct GitHubInfo object and obtain requested nested elements
  const {data: {avatar_url, html_url, location}} = GitHubInfo

 // Split Contributors string of names and store in a constant as an Array
  const contributorsArray = ContributorsGitUserName.split(",");
  console.log(contributorsArray);
 // Make a separate array that holds the URLs
  let contributorsUrlString = ``;
 // Iterate through all contributors
 // forEach element in our contributorsArray,
  contributorsArray.forEach(function(element) {

    // make a Github Repo url string "http://github.com/" + element
    let Url = `http://github.com/${element}`;
    // Dynamically created contributors on generateMarkdown.js
    const mdStr = `\n[${element}](${Url})\n`;
    //Send the Dynamically created url to the global let variable
    contributorsUrlString += mdStr;

  });

 //Call the generateMArkdown and input our responses. avatar_url=image from github; html_url = repo url;
  const ReadmeSkeleton = generateMarkdown({Username, Title, Description, Installation, Usage, License, LicenseURL, contributorsUrlString, tests, avatar_url, html_url, location});

  //Call writetoFile function
  writeToFile("GeneratedReadme.md", ReadmeSkeleton);  

};
 
//Call function init()
init();
