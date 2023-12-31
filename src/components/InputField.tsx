import "./styles.css";
import {useRef} from "react"

type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>; //This is gotten by hovering on the useState call in app
  handleAdd: (e:React.FormEvent) => void;
};

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {

const todoInputRef = useRef<HTMLInputElement> (null)

  return (
    <form className="input" onSubmit={(e)=>{
        handleAdd(e)
        todoInputRef.current?.blur() //takes off the blur once the form is submitted
    }}
  
    >
      <input
        type="input"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        ref={todoInputRef}
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
