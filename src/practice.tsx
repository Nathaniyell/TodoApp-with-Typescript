let myName: string; // How to define a type of string
myName = "Nath";
//name = 5 //throws an error "Type number is not assignable to a string"

let age: number; //Defines a type of number
let isStudent: boolean; //Defines a type of boolean
let hobbies: string[]; //the hobbies variable can only be an array of strings
let arrayOfNumbers: number[]; //the arrayOfNumbers variable can only contain numbers
let role: [number, string]; //A tuple: which Implies that the variable can only contain one number and one string
// Initialize it
//role = ["hello", 10]; // Error
// Initialize it incorrectly
role = [10, "hello"]; // OK

//Defining types for an object
type Person = {
  name: string;
  age: number;
  //age?: number; //the question mark makes the age property optional, meaning that the object can be called without necessarily specifying the age property
};

let person: Person; //Attaches the properties of the Person object to this person variable

person = {
  name: "Nathandiel",
  age: 14
}
let lotsOfPeople: Person[] //defines an array of the person object

let numberOrString: number | string //this is done using the union symbol(|), to specify that the variable can either be a number or a string

let myFunction: (name:string)=>void //whatever is specified after the arrow is what the function returns, it can be a number, string or anything and also the parameter must be well defined


function printName(name: string){
    console.log(name);
    
}