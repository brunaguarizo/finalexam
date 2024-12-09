const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are creating a badge system. This badge system depends on the amount of points you accumulated in these modes "new", "easy", "medium", "hardest", and "apocolypse", by default they all start with 0. The simple application has 2 core functions.

1) ShowStatus, when user use the command "status", the system will show every mode and it's current points.
2) AddPoints, when user use the command "add", the system will ask the user which mode they want to add 1 point to. The user will write one of the mode and that mode will be incremented by 1.

CHALLENGE 1
1) Make a function MakeBadge. This function goes through all the badge and add the points together. If the points total is...
  - less than 10 -> "horrible newbie"
  - between 10 and 20 -> "adventurer"
  - between 20 to 30 -> "slayer"
  - between 30 to 40 -> "divined"
  - above 40 -> "eternal"

CHALLENGE 2
2) Make it that when you calculate points, you multiply the points to the length of the key. EG if "new" only has 1 point, then you will add 3 point to the total because "new" has 3 letters and 3*1 = 3. This is also why having more points in apocolypse will get you the most points because the word apocolypse is the longeest
*/

/* --------------------- PLANNING ---------------------
BADGE SYSTEM

ShowStatus = command status = show mode and points
AddPoints = command add = select the mode + 1 point

Modes:
  - new
  - easy
  - medium
  - hardest
  - apocalypse

CHALLENGE 01
 MakeBadge = command total = see the total
   if it is less than 10 -> "horrible newbie"
   if it is between 10 and 20 -> "adventurer"
   if it is between 20 to 30 -> "slayer"
   if it is between 30 to 40 -> "divined"
   if it is above 40 -> "eternal"

CHALLENGE 02 
mode number of letters x per number of points

  --------------------- PLANNING --------------------- */

let badge = {
  //modes go here
  New: 0,
  Easy: 0,
  Medium: 0,
  Hardest: 0,
  Apocalypse: 0,
};

//rename this to ShowStatus
function ShowStatus(){
  //loop through the badge and log all the mode and all their corresponding points
  console.log("------ MODE POINTS ------");
  Object.keys(badge).forEach((category) => {
    console.log(`${category}: ${badge[category]} point(s)`);
});
}


//rename this to AddPoints
function AddPoints(){
  //Add the point to the correct mode by capturing the readline
  readline.question("Enter the mode to add a point: new, easy, medium, hardest, apocalyse: ", (category) => {
    if (Object.keys(badge).includes(category)) {
      badge[category]++;
      console.log(`Point added to" ${category}" mode.`);
    } else {
      console.log("Mode not found.");
    } StartApp();
  })
}

//  challenge 01
function MakeBadge(){
  let totalPoints =0;
  for (let total in badge){
    totalPoints += badge[total];
  }

  let status;
  if (totalPoints < 10){
    status = "horrible newbie";
  } else if (totalPoints >= 10 || totalPoints < 20){
    status = "adventurer";
  } else if (totalPoints >= 20 || totalPoints < 30){
    status = "slayer";
  } else if (totalPoints >= 30 || totalPoints < 40){
  status = "divined";
  } else if (totalPoints >= 40){
    status = "eternal";
  }

    console.log ("-------------Total Points-------------");
    console.log(`Total points: ${totalPoints}`);
    console.log(`Status: ${status}`);
}

function StartApp(){
  readline.question("What is your command? You can show, add, total or quit: ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else if(_command === "add"){
      AddPoints();
      StartApp();
    } else if (_command === "show"){
      ShowStatus();
      StartApp();
    } else if (_command === "total"){
      MakeBadge();
      StartApp();
    }
  })
}

StartApp();