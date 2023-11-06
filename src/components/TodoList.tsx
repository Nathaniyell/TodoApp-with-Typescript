import { Todo } from "../model";

type Props = {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <ul className="todos">
            {todos.map(todo => {
                return (
                    <li key={Date.now()}>
                        <span>{todo.todo}</span>
                    </li>
                );
            })}
        </ul>
    );
}

export default TodoList;
