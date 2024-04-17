#! /usr/bin/env node

import inquirer from "inquirer"

let roundnumber: number = Math.floor((Math.random() * 4) + 1);

let userinput = await inquirer.prompt({
    type: 'number',
    name: 'guessedNumber',
    message: 'guess a number between 1 -4 '
})


if(userinput.guessedNumber === roundnumber){
    console.log('congratulations! you guessed correctly');

}else{
    console.log(`sorry! try to next time. correct ans is: ${roundnumber}`);
}



