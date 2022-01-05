const getSleepHours = day => {
  day = day.toLowerCase();
  switch (day){
  case 'monday':
    return 7
  case 'tuesday':
    return 7
  case 'wednesday':
    return 7
  case 'thursday':
    return 7
  case 'friday':
    return 7
  case 'saturday':
    return 7
  case 'sunday':
    return 5  
  }
};

const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
};

const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('The user got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week. Stay up a little longer.');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  } else {
    console.log('sleepDebt Error!!');
  }
};

calculateSleepDebt();


/*//Test
console.log('****  Test Section ****');
console.log('Day Seep Hours: ' + getSleepHours('Tuesday'));
console.log('Acutal Sleep: ' + getActualSleepHours());
console.log('Ideal Sleep: ' + getIdealSleepHours());
console.log('Sleep Debt: ' + calculateSleepDebt());
*/
