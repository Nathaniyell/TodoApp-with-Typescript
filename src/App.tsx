import React from "react";

import "./App.css";

let name: string; // How to define a type of string
name = "Nath";
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

function App() {
  return <div className="App">Hello World</div>;
}

export default App;
