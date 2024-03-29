#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is correct");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw successfuly`);
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Account Balance is ${myBalance} `);
    }
}
else {
    console.log("pin is incorrect!");
}
