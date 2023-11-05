type Props = {
    todos: Array<{ name: string }>;
}

const TodoList: React.FC<Props> = ({ todos }) => {
    return (
        <ul>
            {todos.map(todo => {
                return (
                    <li key={todo.name}>
                        <span>{todo.name}</span>
                    </li>
                );
            })}
        </ul>
    );
}

export default TodoList;
