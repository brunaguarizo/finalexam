const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
This will be a simple application, but potentially complicated to implement. There's a set of colors in the theme object. "red", "green", "blue", "yellow", and "orange". By default they are all true. The application allow users to add a color to the system as long as it's part of the 5 colors. You can toggle the colors from true to false with the command "toggle" and then a second readline for the color itself. Always DisplayUserColors after AddUserColor or ToggleThemeColor completes.

Here are some logistics that this application must follow
Only add a color when the theme color is true otherwise console log that it's not allowed

When a color is toggled from true to false, also remove the color from userColors. You can do this by making a new array, then looping through userColors and only pushing the colors that are true into the new array. Then reassign the new array to userColors.
*/

/* --------------------- PLANNING ---------------------
Color list: red, green, blue, yellow and orange = true

Command Add =  check if the color is in the list
  if it is = add to the list
  then DisplayUserColor

  if it is not = not allowed 
  then DisplayUserList

Toggle color value
  if true = add
  if false = not allowed

When toggle = remove colors
it will be necessary to check in the list if the fruits -> favFruits
if it is included in the favFruits -> removes it
then display the list

--------------------- PLANNING ---------------------*/

let userColors = [];
let theme = {
  //the 5 color and their boolean value goes here
  Red: true,
  Green: true,
  Blue: true,
  Yellow: true,
  Orange:true,
};

//rename this to AddUserColor
function AddUserColor(){
  //add a color to userColors
  readline.question("What is the color you want to add? ", (color) => {
    if (theme[color] === true){
      userColors.push(color);
      console.log(`The color "${color}" was added to the list.`);
    DisplayUserColor();
    } else if (theme[color] === false){
      console.log(`The color "${color}" is not available.`);
      DisplayUserColor();
    } else {
      console.log("This color is not valid.");
      DisplayUserColor();
    }
    StartApp();
  })
}

//rename this to DisplayUserColors
function DisplayUserColor(){
  //add a color to userColors
  if (userColors.lentgth === 0) {
    console.log("There are no colors in the list.");
  } else {
    console.log(`List of colors: ${userColors}`);
  };
  StartApp();
}

//rename this to ToggleThemeColor
function ToggleThemeColor(){
  //ask for a color to toggle
  for (let color in theme){
    theme[color] = !theme[color];}
    console.log("The availability of all colors has been toggled.");
    DisplayUserColor();
    StartApp();
  }



function StartApp(){
  readline.question("What is your command? You can add, display, toggle or quit: ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else if (_command === "add") {
      AddUserColor();
      StartApp();
    } else if (_command === "display"){
      DisplayUserColor();
      StartApp();
    } else if (_command === "toggle"){
      ToggleThemeColor();
      StartApp();
    } else {
      console.log("Command not found.");
    }
  })
}

StartApp();