# week-code-challenge

# Speed Checker, July 2024

This is an application called Speed Checker that helps determine the demerit points a driver acquires for speeding.

#### By **George Badia**

This project was created and is the sole property of George Badia.

## Description

The Speed Checker application assesses the speed of a driver and calculates the demerit points acquired based on the speed limit. If the driver exceeds the speed limit, demerit points are calculated. If the acquired points exceed the limit, the license is suspended.

## Setup/Installation Requirements

- Linux or WSL for Windows users
- Visual Studio Code installed
- GitHub account

1. Open your terminal and navigate to the desired directory.
2. Clone the repository from https://github.com/george-badia/toy-code.
3. Clone the repository using the SSH key.
4. Open the cloned repository in Visual Studio Code.
5. Start debugging the application.
   
## Technologies Used

This program is built purely with JavaScript using the Visual Studio Code environment. It utilizes a `db.json` file for data storage.

## Support and Contact Details

For any issues, please email me at george.otieno1@student.moringaschool.com

### License

Apache License 2.0


# Grade Calculator ,July 2024

## Overview
This Grade Calculator is a simple program that calculates a student's grade based on the marks entered. The user is prompted to input the student's marks, and the program validates the input to ensure it falls within the range of 0 to 100. The grade is then determined based on the specified criteria.

## Instructions/installation set-up
To run the Grade generator, follow these steps:
- Ensure you have Node.js installed on your machine.
- Clone the repository https://github.com/george-badia/toy-code containing the code.
- Open a terminal and navigate to the directory where the code is located.
- Install the necessary dependencies by running: `npm install readline-sync`
- Run the program by executing the following command: `node gradegenerator.js`
- Follow the prompts to enter the student's marks. The program will then display the grade of the student.
## Technologies Used
- JavaScript
- Node.js
- readline-sync

## Code Structure
- The program uses the `readline-sync` module to interact with the user in the terminal.
- The `calculateGrade` function validates the input marks and determines the grade.
- The `main` function orchestrates the grading process by calling `calculateGrade` and displaying the result.

## Contact
For any questions or issues regarding the Grade Calculator, please contact the developer at otieno1@student.moringaschool.com or whatsapp 0703214696.

### License

Apache License 2.0

# Salary Calculator application, july 2024

## Description
The Salary Calculator application calculates the net salary of an employee based on the basic salary and benefits provided. It takes into account PAYE (tax), NHIF deductions, and NSSF deductions to provide the final net salary amount.

## By **George Badia**

This project was created and is the sole property of George Badia.

## Setup/Installation Requirements

- Linux or WSL for Windows users
- Visual Studio Code installed
- GitHub account
- Ensure you have Node.js installed on your machine.

1. Open your terminal and navigate to the desired directory.
2. Clone the repository from https://github.com/george-badia/toy-code .
3. Clone the repository using the SSH key.
4. Open the cloned repository in Visual Studio Code.
5. Install the necessary dependencies by running: `npm install readline-sync`
6. Run the program by executing the following command: `node salarycalculator.js`
Follow the prompts to enter the `basic salary` and `benefits`. which are then used to compute and display the `gross salary, PAYE (tax), NHIF deduction, NSSF deduction, and net salary`.
   
## Technologies Used

- JavaScript
- Node.js
- readline-sync

## Code Structure
- The program uses the `readline-sync module` to interact with the user in the terminal.
- The `TaxCalculation function` calculates the PAYE (tax) based on the gross salary.
- The `NHIFCalculation function` calculates the NHIF deductions based on the gross salary.
- The `NSSFCalculation function` calculates the NSSF deductions based on the gross salary.
- The `NetSalaryCalculation function` orchestrates the process of calculating the net salary by calling the tax, NHIF, and NSSF calculation functions and then computing the `net salary`.
- The `user inputs` the `basic salary` and `benefits`, which are then used to compute and display the `gross salary, PAYE (tax), NHIF deduction, NSSF deduction, and net salary`.

## Support and Contact Details

For any issues, please email me at george.otieno1@student.moringaschool.com

### License

Apache License 2.0
