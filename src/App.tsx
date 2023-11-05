import "./App.css"
import InputField from "./components/InputField";

const App:React.FC = () =>{ //React.FC specifies a functional component
  return <div className="App">
<span className="heading">
  Taskify
</span>

<InputField />
  </div>;
}

export default App;
