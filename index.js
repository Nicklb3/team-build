// Import the "inquirer" and "fs" modules into a Node.js application, allowing the program to prompt the user for input and interact with the file system
const inquirer = require("inquirer");
const fs = require("fs");

// Import the Employee, Manager, Engineer, and Intern classes from the "lib" folder, as well as the generateHtml function from the "utils" folder, which are likely being used to build an HTML page for a software application or website
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require("./utils/generatehtml");

// Declares an empty array called "employees", which can be used to store and manipulate data related to employee records in a program or application
const employees = [];

// Declares a function called "writeToFile" that takes in two parameters: "fileName" (a string representing the name of the file to be written to) and "data" (the data to be written to the file). The function is likely being used to write data to a file in a Node.js application
function writeToFile (fileName, data) {
    fs.writeFile (fileName, generateHtml(employees), (err) =>
    err ? console.error(err) : console.log("index.html successfully created!")
  );
}

// Define an array called "managerQuestions" that contains a series of objects representing questions to be asked to a user in a command-line interface. The questions are related to a manager's personal information, including their first and last name, ID, email address, and office number. The questions are likely being used to collect data to create a new manager object in a software application or website
const managerQuestions = [
    {
        type: 'input',
        message: 'What is your first name?',
        name: 'firstName',
    },
    {
        type: 'input',
        message: 'What is your ID?',
        name: 'id', 
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email', 
    },
    {
        type: 'input',
        message: 'What is your last office number?',
        name: 'office', 
    },
];