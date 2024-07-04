const readline = require('readline-sync');

// Function for calculat PAYE (tax)
function TaxCalculation(grossSalary) {
     //  tax Calculated based on different salary pocketed
    if (grossSalary <= 24000) {
        return grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        return (24000 * 0.10) + ((grossSalary - 24000) * 0.25);
    } else if (grossSalary <= 500000) {
        return (24000 * 0.10) + ((32333 - 24000) * 0.25) + ((grossSalary - 32333) * 0.30);
    } else if (grossSalary <= 800000) {
        return (24000 * 0.10) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.30) + ((grossSalary - 500000) * 0.325);
    } else {
        return (24000 * 0.10) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.30) + ((800000 - 500000) * 0.325) + ((grossSalary - 800000) * 0.35);
    }
}

// Function tfo calculate NHIF deductions
function NHIFCalculation(grossSalary) {
    if (grossSalary <= 5999) return 150;
    else if (grossSalary <= 7999) return 300;
    else if (grossSalary <= 11999) return 400;
    else if (grossSalary <= 14999) return 500;
    else if (grossSalary <= 19999) return 600;
    else if (grossSalary <= 24999) return 750;
    else if (grossSalary <= 29999) return 850;
    else if (grossSalary <= 34999) return 900;
    else if (grossSalary <= 39999) return 950;
    else if (grossSalary <= 44999) return 1000;
    else if (grossSalary <= 49999) return 1100;
    else if (grossSalary <= 59999) return 1200;
    else if (grossSalary <= 69999) return 1300;
    else if (grossSalary <= 79999) return 1400;
    else if (grossSalary <= 89999) return 1500;
    else if (grossSalary <= 99999) return 1600;
    else return 1700;
}

//  calculate NSSF deductions 
//  NSSF deductions are based on salary tiers
function NSSFCalculation(grossSalary) {
    const tier1 = Math.min(grossSalary, 6000) * 0.06;
    const tier2 = Math.max(0, grossSalary - 6000) * 0.06;
    return tier1 + tier2;
}

// Main function to calculate net salary
function NetSalaryCalculation(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = TaxCalculation(grossSalary);
    const nhif = NHIFCalculation(grossSalary);
    const nssf = NSSFCalculation(grossSalary);
    const netSalary = grossSalary - (payee + nhif + nssf);
    
    return {
        grossSalary: grossSalary,
        payee: payee,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary
    };
}

// Get user inputs,the benefits and basic salary
const basicSalary = parseFloat(readline.question("Enter basic salary: "));
const benefits = parseFloat(readline.question("Enter benefits: "));

// Calculate net salary
const salaryDetails = NetSalaryCalculation(basicSalary, benefits);

// Display the results,
console.log(`Gross Salary: ${salaryDetails.grossSalary.toFixed(2)}`);
console.log(`PAYE (Tax): ${salaryDetails.payee.toFixed(2)}`);
console.log(`NHIF Deduction: ${salaryDetails.nhif.toFixed(2)}`);
console.log(`NSSF Deduction: ${salaryDetails.nssf.toFixed(2)}`);
console.log(`Net Salary: ${salaryDetails.netSalary.toFixed(2)}`);
