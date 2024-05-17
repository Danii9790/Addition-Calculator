import inquirer from "inquirer";
const num1_input = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter your first Number"
    }
]);
const num2_input = await inquirer.prompt([
    {
        name: "num2",
        type: "number",
        message: "Enter your Second Number"
    }
]);
let total = num1_input.num1 + num2_input.num2;
console.log(total);
