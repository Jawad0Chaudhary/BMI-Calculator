#! /usr/bin/env node

import inquirer from "inquirer";

let weight = await inquirer.prompt(
  [
    {
      name: "weightInKg",
      type: "number",
      message: "Please Enter Your Weight In (kg):",
    }
  ]
);

let height = await inquirer.prompt(
  [
    {
      name: "heightInMeters",
      type: "number",
      message: "Please Enter Your Height In (Meters):",
    }
  ]
);

let bmi = Math.floor (weight.weightInKg / (height.heightInMeters * height.heightInMeters));
console.log(`Your BMI is: ${bmi}`);

if(bmi <= 18.4){
  console.log("You are Underweight!!!");
}else if(bmi > 18.4 && bmi < 25){
  console.log("Your Weight Is Norma;!!!");
}else if(bmi > 24.9 && bmi < 40){
  console.log("You are Overweight!!!");
}else if(bmi >= 40){
  console.log("You are Obese!!!");
}else{
  console.log("Please Enter Your Sufficient Height or Weight");
}