import { useState } from "react";
import "./App.css"
import InputField from "./components/InputField";

const App:React.FC = () =>{ //React.FC specifies a functional component

const [todo, setTodo] = useState<string>("") //the angle brackets is used to define the type of the todo variable, the union(|) symbol can be used to specify multiple types: string|number etc


  return <div className="App">
<span className="heading">
  Taskify
</span>

<InputField todo={todo} setTodo={setTodo} />
  </div>;
}

export default App;
