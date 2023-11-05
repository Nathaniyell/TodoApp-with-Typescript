import React from 'react';

import './App.css';

let name:string // How to define a type of string
name = "Nath"
//name = 5 //throws an error "Type number is not assignable to a string"

let age:number; //Defines a type of number
let isStudent: boolean; //Defines a type of boolean
let hobbies:string[] //the hobbies variable can obly be an array of strings



function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
