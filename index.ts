import inquirer from "inquirer"

let myBalnce = 15000;
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
                        type: "list",
                        message: "Please select your amount ",
                        choices: ["1000","2000","5000","10000"]
            
                    })

                    myBalnce -= amount.userAmount
                    console.log(`"your remaining balance is "${myBalnce}` )

                 } if (codeInput.userCode === "balance check"){
                        console.log(`"your current balance is " ${myBalnce}` )
            
    } 
       

    }else{
        console.log("incorrect pin code!!!")
    }

    
