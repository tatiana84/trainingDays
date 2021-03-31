// The scope of `random` is too loose 
//const random = Math.floor(Math.random() * 3);
 
const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'Marathon';
    } else if (random === 1) {
        return 'Triathlon';
    } else if (random === 2) {
        return 'Pentathlon';
    }
};
 
// The scope of `days` is too tight 
const getTrainingDays = event => {
    const days = [50, 100, 200];
  if (event === 'Marathon') {
    return days[0];
  } else if (event === 'Triathlon') {
    return days[1];
  } else if (event === 'Pentathlon') {
    return days[2];
  }
 
  return days;
};
//console.log(getTrainingDays('Pentathlon'));
 
// The scope of `name` is too tight
const name = 'Nala';
const logEvent = event => {
  console.log(`${name}'s event is: ${event}`);
};
 
const logTime = days => {
  //const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};
 
const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 
 
 
logEvent(event);
logTime(days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);