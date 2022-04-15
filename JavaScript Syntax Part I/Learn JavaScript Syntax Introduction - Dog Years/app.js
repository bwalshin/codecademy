const myAge = 29;

// Dog age - first 2 years
let earlyYears = 2;
earlyYears *= 10.5;

// Dog age - later years clac
let laterYears = myAge - 2;
laterYears *= 4;

// My age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// My name
let myName = "Brandon".toLowerCase();



console.log(earlyYears)
console.log(laterYears)
console.log(myAgeInDogYears)
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);