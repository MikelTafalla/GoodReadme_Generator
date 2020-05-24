//Create consts to call inquirer npm y fs that will use for the questionaire and to write the Readmefile
const inquirer = require("inquirer");
const fs = require('fs');

//create the array of questions
const questions = [
    { 
      type: "input",
      message: "What is your GitHub user name?",
      name: "Username"
    },
    { 
      type: "input",
      message: "What is your Project Tittle?",
      name: "Title"
    },
    { 
      type: "input",
      message: "Provide detail description",
      name: "Description"
    },
    { 
      type: "input",
      message: "Provide table of contents. Order the contents with a number before the text. Ex: 1. Home Tab",
      name: "TableofContents"
    },
    { 
      type: "input",
      message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
      name: "Installation"
    },
    { 
      type: "input",
      message: "Provide instructions for use.",
      name: "Usage"
    },
    {
      type: "input",
      message: "provide License name",
      name: "License"
  },
  {
      type: "input",
      message: "please enter git hub user names of the contributor if any (If there are mulitple contributor, seperate names with comma and no space! )",
      name: "contributorsGitUserName"
  },
  {
      type: "input",
      message: "Provide examples on how to run tests.",
      name: "tests"
  }

];

//Function that will contain the fs module to create the ReadMe file
function writeToFile(fileName, data) {
}


function init() {

}
//Call function init()
init();
