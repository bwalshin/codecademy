let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;
let age = 18;

if (registeredEarly === true && age > 18){
raceNumber += 1000
};

if (registeredEarly === true && age > 18){
  console.log(`Your race will start at 9:30am. Your race number is: ${raceNumber}.`);
} else if (registeredEarly === false && age > 18){
  console.log(`Your race will start at 11:00am. Your race number is: ${raceNumber}.`);
} else if (age < 18) {
  console.log(`Your race will start at 12:30pm. Your race number is: ${raceNumber}.`);
} else if (age = 18) {
  console.log(`Please see the registration desk for your time and race number.`);
};
