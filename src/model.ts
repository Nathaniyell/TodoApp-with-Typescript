import {useReducer} from "react"
export type Todo = {
    id: number;
    todo: string;
    isDone:boolean;
}
type Actions =
|{    type: "add", payload:string}
|{    type: "remove", payload:number}
|{    type: "add", payload:string}

const reducer = (state:Todo[], action:)=>{

}

const TodoReducer = ()=>{
    const [state, dispatch] = useReducer(reducer, [])
}