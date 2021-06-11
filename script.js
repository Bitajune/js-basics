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

*/

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

// Conversion and coercion

// Equality operators

// Logical operators

// The switch statement

// The Conditional operator
 test test