import {useReducer} from "react"
export type Todo = {
    id: number;
    todo: string;
    isDone:boolean;
}
type Actions =
|{    type: "add", payload:string}
|{    type: "remove", payload:number}
|{    type: "done", payload:number}

const reducer = (state:Todo[], action:Actions)=>{
switch(action.type){
    case "add":
        return[...state, {id:Date.now(), todo:action.payload, isDone:false}];
        case "remove":
            return state.filter(todo=>todo.id !==action.payload)
        
}
}

const TodoReducer = ()=>{
    const [state, dispatch] = useReducer(reducer, [])
}