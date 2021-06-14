/*
// Values

console.log("Bita");
console.log(23);

let firstName = "Bita"; 
console.log(firstName);

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';


// Practice assignment 1 LECTURE: Values and Variables
//1. Declare variables called 'country', 'continent' and 'population' and
//assign their values according to your own country (population in millions)
//2. Log their values to the console

let country = "United States";
let continent = "North America";
let population = 10;

console.log (country, continent, population);
//------------------------------------------------------------------------------------------------------------
// Data Types

let javascriptIsFun = true;
console.log(typeof javascriptIsFun);
console.log(typeof 30);
console.log(typeof "Bita");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
year = 2021;
console.log(typeof year);


// Practice assignment 2 LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console 

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//------------------------------------------------------------------------------------------------------------
// Let, Const, Var

let age = 31;
age = 31;

const birthYear = 1990;


// Practice assignment 3 LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens 

const continent = "North America";
const country = "United States"
const isIsland = false;
let language = "English";
console.log (continent, country, isIsland, population, language);



//------------------------------------------------------------------------------------------------------------
// Basic Operators

const now = 2020
const ageBita = now - 1990;
const ageChris = now - 1988;
console.log(ageBita, ageChris);
console.log(ageBita * 2, ageChris / 2);

const firstName = "Bita";
const lastName = "De La Rosa";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
 x += 10; // x = x + 10 = 25
 x *= 4; // x = x * 4 = 100
 x++; // x = x + 1 = 101
 x--; // x = x - 1 = 100
console.log(x);

// Comparison operators
console.log(ageBita > ageChris);
console.log(ageBita < ageChris);
console.log(ageBita >= 20);
console.log(ageBita >= 40);

let x, y;
x = y = 25 - 10 - 5;
console.log (x, y);

const averageAge = (ageBita + ageChris) / 2; //the parenthesis are important



/* Practice assignment 4 LECTURE: Basic Operators
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'

let myPopulation = 5;
myPopulation++;
console.log(myPopulation);
let finlandPopulation = 6000000;
console.log (myPopulation >= finlandPopulation);
let averagePopulation = 33000000;
console.log (myPopulation >= averagePopulation);
const description = "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(description);

*/

//------------------------------------------------------------------------------------------------------------
// * CODING CHALLENGE 1

/* Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
 Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
 Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

//Data 1
let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;

let markBMI = markWeight / (markHeight * markHeight);
console.log(markBMI);
let johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//Data 2
let markHeight2 = 1.88;
let markWeight2 = 95;
let johnHeight2 = 1.76;
let johnWeight2 = 85;

let markBMI2 = markWeight2 / (markHeight2 * markHeight2);
console.log(markBMI2);
let johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);
console.log(johnBMI2);

let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2);


// Strings and template literals
const firstName = "Bita";
const job = 'Teacher';
const birthYear = 1990;
currentYear = 2021;

const bita = "I'm " + firstName + ", a " + (currentYear - birthYear) + " year old " + job;
console.log(bita);

const bitaNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}`;
console.log(bitaNew);

console.log(`Just a regular string!`);

console.log(`String
with
multiple
lines`);

//Practice
const country = "Portugal";
const continent = "Europe";
const population = 11000000;
const language = "Portuguese";

const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);



// If else statements
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can get her drivers license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. wait another ${yearsLeft} years!`);
}

const birthYear = 1990;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


//CODING CHALLENGE #2
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"


//Data 1
let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;

let markBMI = markWeight / (markHeight * markHeight);
console.log(markBMI);
let johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

if (markHigherBMI) {
  console.log(`Marks BMI is higher at ${markBMI}`);
} else {
  console.log(`Johns BMI is higher at ${johnBMI}`);
}

let markHeight2 = 1.88;
let markWeight2 = 95;
let johnHeight2 = 1.76;
let johnWeight2 = 85;

let markBMI2 = markWeight2 / (markHeight2 * markHeight2);
console.log(markBMI2);
let johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);
console.log(johnBMI2);

let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2);

if (markHigherBMI2) {
  console.log(`Marks BMI is higher at ${markBMI2}`);
} else {
  console.log(`Johns BMI is higher at ${johnBMI2}`);
}


// Conversion and coercion

//type conversion
const inputYear = "1991";
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number("Bita"));
console.log(typeof NaN);

console.log(String(23));
console.log(String(23), 23);

//type coercion
console.log("I am " + 30 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" > "18");

let n = "1" + 1;
n = n - 1;
console.log(n);

//Predict the result of these 5 operations without executing them:
console.log("9" - "5");
//4
console.log("19" - "13" + "17");
//617
console.log("19" - "13" + 17);
//23
console.log("123" < 57);
//false
console.log(5 + 6 + "4" + 9 - 4 - 2);
//1143


//Truthy and Falsy
//5 Falsy values: 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Bita"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined!");
} else {
  console.log("Height is UNDEFINED");
}

// Equality operators
const age = 18;
if (age === 18) console.log("You just became an adult");

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 27) {
  console.log("cool! 27 is an amazing number");
} else if (favourite === 7) {
  console.log("7 is also a cool number!");
} else {
  console.log("nice!");
}

if (favourite !== 27) console.log("Why not 27?");

//practice
const numNeighbors = Number(
  prompt("How many neighbor counties does your country have?")
);

if (numNeighbors === 1) {
  console.log("You have one neighbor!");
} else if (numNeighbors > 1) {
  console.log("You have multiple neighbors!");
} else {
  console.log("You have no neighbors!");
}


// Logical operators
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive");
// }

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive");
}



//CODING CHALLENGE #3
// const dolphinsAverage = (96 + 108 + 89) / 3;
// const koalasAverage = (88 + 91 + 110) / 3;
// console.log(dolphinsAverage, koalasAverage);

// if (dolphinsAverage > koalasAverage) {
//   console.log("Dolphins win!");
// } else if (dolphinsAverage < koalasAverage) {
//   console.log("Koalas win!");
// } else {
//   console.log("It's a tie!");
// }

//BONUS
const dolphinsAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 106) / 3;
console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log("Dolphins win!");
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
  console.log("Koalas win!");
} else if (
  dolphinsAverage === koalasAverage &&
  dolphinsAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log("It's a tie!");
} else {
  console.log("No one wins!");
}


// The switch statement
const day = "wednesday";

switch (day) {
  case "monday": //day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "satruday":
  case "sunday":
    console.log("Relax");
    break;
  default:
    console.log("Not a valid day");
}
practice

const language = "farsi";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("Most number of natice speakers");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("That's a great language!");
}
*/

// The Conditional operator
const age = 23;
// age >= 21
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water");

const drink = age >= 21 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 21 ? "wine" : "water"}`);

//practice
const population = 3000000;
const unitedStates =
  population >= 33000000
    ? "The United States population is above average"
    : "The United States population is below average";
console.log(unitedStates);
