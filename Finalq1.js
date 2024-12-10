const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are making a simple drinking store application. There are 2 parts to this

1) You need the organizer to register the age of each customer coming in. You will do this using an array.
2) Depending on the "settings" of the store, if alcohol is true that means it's adults only meaning anyone under the age of 19 are not allowed to drink and should be notified. When the alcohol setting is true, if the age in the registry is 19 or above console log "You are allow to drink in here." otherwise "You are not allowed in here.". When the setting is false, console log "Everyone is welcome in here!"

CHALLENGE 1
Have another setting for age. By default the age is set to 19, but the user can set the age to another desired drinking age by using the command "change age". This also means the age for notification needs to correspond to this setting

CHALLENGE 2
Make a VIP setting, and allow the user to type in an index that corresponds to the VIP. By default VIP is false, but the user can write "make vip", to assign a number to the VIP setting. The user can also write "cancel vip" to turn vip back to false.

When VIP is not false, when the notify function is called, only the VIP will get notified. Everybody else will get console logged "sorry the store is not available today."
*/

/* ------------------------- PLANNING -------------------------
DRINKING STORE APPLICATION  

Command: register  (function RegisterUser)
  user
  age

Settings: 
  toggle = function ToggleAlcohol

  if Alcohol = true
    < drinking age -> not allowed to drink
    console.log "You are not allowed in here."
  
    >= drinking age -> allowed to drink
    console.log "You are allow to drink in here."

  if Alcohol = false
    console.log "Everyone is welcome in here!"

let drinking age = 19

CHALLENGE 01
Command = change age
change the drinking age

CHALLENGE 02
let VIPsetting = VIP
  VIP = false

make VIP = adds a number = true 
  members get notification

cancel VIP = turns back to false 
  console.log "sorry the store is not available today."


  ------------------------- PLANNING ------------------------- */

let registry = [];
let settings = {
  alcohol: true,
  vip: false,
};

let drinkingAge = 19;
let age = [];

//rename this to RegisterUser
function RegisterUser() {
  readline.question("What is the age of the user you want to register? ", (age) => {
    age = Number(age);

    if (!settings.alcohol){
      console.log("Everyone is welcome in here!");
      StartApp();

    } else if (age < drinkingAge){
      console.log("You are not allowed in here.");
      StartApp();
    }
    
    else if (age >= drinkingAge) {
      readline.question("What is the name of the user? ", (user) => {
        console.log(`${user} is allowed to drink in here.`);
        registry.push(user);
        StartApp();
      });
    }
  });
}


//rename this to ToggleAlcohol
function ToggleAlcohol(){
  //toggle alcohol setting
  for (let alcohol in settings) {
    settings[alcohol] = !settings[alcohol];}
    console.log("The alcohol settings has been toggled.");
    StartApp();
  }

//rename this to NotifyAll
function NotifyAll(){
  //go through the array to notify everyone
  if (registry.length === 0) {
    console.log("Sorry the store is not open today.");
  } else {
    console.log(`List of users registered: ${registry}`);
  }
  StartApp();
}

// change drinking age - I could not make this work :(
function ChangeAge() {
  readline.question("What is the new drinking age? ", (newAge) => {
    newAge = Number(newAge);
    if (drinkingAge(newAge) && newAge > 0) {
     let drinkingAge = newAge;
    console.log(`The new drinking age is now ${drinkingAge}.`);
    } 
    StartApp();
  });
}



function StartApp(){
  readline.question("What is your command? You can register, toggle, notify, change age or quit: ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else if ( _command === "register"){
      RegisterUser();
      StartApp();
    } else if (_command === "toggle"){
      ToggleAlcohol();
      StartApp();
    } else if (_command === "notify"){
      NotifyAll();
      StartApp();
    } else if (_command === "change age"){
      ChangeAge(Number(age));
      StartApp();
    } else {
      console.log("Command not found.")
    }
      StartApp();
    })
  }


StartApp();