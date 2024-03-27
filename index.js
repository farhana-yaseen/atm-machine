import inquirer from "inquirer";
let myBalnce = 15000;
let myPinCode = 223344;
const codeInput = await inquirer.prompt({
    name: "userCode",
    type: "number",
    message: "Please Enter your Pin Code : "
});
if (codeInput.userCode === myPinCode) {
    console.log("valid pin code!!!");
    const accountType = await inquirer.prompt([{
            name: "account",
            type: "list",
            message: "please select account type",
            choices: ["saving", "current"]
        },
        {
            name: "transaction",
            type: "list",
            message: "please select your transaction",
            choices: ["withdraw", "fast cash", "balance check"]
        }]);
    if (accountType.transaction === "withdraw") {
        const userAmount = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: "Enter your amount ",
        });
        myBalnce -= userAmount.amount;
        console.log(`"your remaining balance is "${myBalnce}`);
    }
    if (myBalnce <= accountType.amount) {
        console.log(" insufficient amount ");
    }
    if (accountType.transaction === "fast cash") {
        const selectAmount = await inquirer.prompt({
            name: "userChoice",
            type: "list",
            message: "Please select your amount ",
            choices: ["1000", "2000", "5000", "10000"]
        });
        myBalnce -= selectAmount.userChoice;
        console.log(`"your remaining balance is "${myBalnce}`);
    }
    if (accountType.transaction === "balance check") {
        console.log(`"your current balance is " ${myBalnce}`);
    }
}
else {
    console.log("incorrect pin code!!!");
}
