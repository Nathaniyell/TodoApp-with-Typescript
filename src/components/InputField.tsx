import "./styles.css";

type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>; //This is gotten from 
};

const InputField:React.FC<Props> = ({ todo, setTodo }) => {




  return (
    <form className="input">
      <input type="input" placeholder="Enter a task" className="input__box"
      value={todo}
      onChange={(e)=>setTodo(e.target.value)}
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
