import React from 'react';

import './App.css';

let name:string // How to define a type of string
name = "Nath"
//name = 5 //throws an error "Type number is not assignable to a string"
function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
