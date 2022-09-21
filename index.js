// Write your code in this file!
function scuberGreetingForFeet(feet){
  let result = ''
  if(feet <= 400){
    result = 'This one is on me!'
  }
  else if(feet < 2000){
    result = 'That will be twenty bucks.'
  }
  else if(feet < 2500){
    result = 'I will gladly take your thirty bucks.'
  }
  else{
    result = 'No can do.'
  }
  return result;
}

function ternaryCheckCity(city){
  let resultCity = ''
  if(city === "NYC"){
    resultCity = "Ok, sounds good."
  }
  else{
    resultCity = "No go."
  }
  return resultCity;
}

function switchOnCharmFromTip(tip){
  if(tip === "generous"){
    return "Thank you so much.";
  }
  else if(tip === "not as generous"){
    return "Thank you.";
    }
  else{
    return "Bye.";
  }
}

scuberGreetingForFeet(2555);