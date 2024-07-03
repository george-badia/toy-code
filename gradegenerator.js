// Import readline-sync for input,used this to test in the terminal 
const readline = require('readline-sync');

// Function to calculate grade based on marks
function calculateGrade() {
    let marks;
    do {
        marks = readline.question("Please enter the student's marks (between 0 and 100): ");
        marks = parseFloat(marks); // for more accurate validation
    } while (isNaN(marks) || marks < 0 || marks > 100);

    if (marks > 79) {
        return 'A';
    } else if (marks >= 60) {
        return 'B';
    } else if (marks >= 50) {
        return 'C';
    } else if (marks >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

// Main function to execute the grading process
function main() {
    let grade = calculateGrade();
    console.log(`Grade is: ${grade}`);
}

// Execute the main function
main();
