import { useState } from "react";
import { toast } from "react-toastify";



const ToDoForm = ({addTodo ,hasTodo}) => {
    const [value ,setValue] =useState("");
    
    const handleChange =e =>{
        e.preventDefault();
       if(value.trim()!=""){
            addTodo(value)
            toast.success("✨ New task added successfully! Keep it up 💪");

       }else{
          toast.info("Please write your task");
       }
        setValue("");
    }
  return (
    <form onSubmit={handleChange} className={`${hasTodo ?"border":""}`}>
        <h1>To Do List</h1>
        <input type="text" value={value} className="todoInput" onChange={e=>setValue(e.target.value)} placeholder="What's the task to day" />
        <button  type="submit" className="todoBtn">Add</button>
    </form>
  )
}

export default ToDoForm;
