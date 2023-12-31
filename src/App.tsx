import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  //React.FC specifies a functional component

  const [todo, setTodo] = useState<string>(""); //the angle brackets is used to define the type of the todo variable, the union(|) symbol can be used to specify multiple types: string|number etc

  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), isDone: false, todo: todo }]);
      setTodo("");
    }
  };
  // console.log(todos);
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    // console.log(result)

    if (!destination){
      return;
    } 
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ){

      return;
    }

    let add;
      let active = todos;
      let complete = completedTodos;

    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = active[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
    setCompletedTodos(complete);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Taskify</span>

        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
      ;
    </DragDropContext>
  );
};

export default App;
