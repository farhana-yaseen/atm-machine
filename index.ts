import inquirer from "inquirer"

let myBalnce = 150000;
let myPinCode = 223344;

const codeInput = await inquirer.prompt(
    {
        name: "userCode",
        type: "number",
        message: "Please Enter your Pin Code : "
    })
    
    if (codeInput.userCode === myPinCode){
        console.log("correct pin code!!!")
       
        const operation = await inquirer.prompt(
            {
                name: "userChoice",
                type: "list",
                message: "please select option",
                choices: ["withdraw" , "blance check"]
            })

            if (operation.userChoice === "withdraw"){
                const amount = await inquirer.prompt(
                    {
                        name: "userAmount",
                        type: "number",
                        message: "Enter your amount ",
            
                    })

                    myBalnce -= amount.userAmount
                    console.log(`"your remaining balance is "${myBalnce}` )

                 } if (codeInput.userCode === "balance check"){
                        console.log(`"your current balance is " ${myBalnce}` )
            
    } 
       

    }else{
        console.log("incorrect pin code!!!")
    }

    
