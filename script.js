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

*/

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
people speak portuguese' */


//------------------------------------------------------------------------------------------------------------
// * CODING CHALLENGE 1