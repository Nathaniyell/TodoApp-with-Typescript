import "./styles.css"

const InputField = ()=>{
return <form action="input">
    <input type="input" placeholder="Enter a task" className="input__box" />
    <button className="input__submit" type="submit">Go</button>
</form>
}

export default InputField