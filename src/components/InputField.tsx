import "./styles.css";

type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
};

const InputField = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
      <input type="input" placeholder="Enter a task" className="input__box" />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
