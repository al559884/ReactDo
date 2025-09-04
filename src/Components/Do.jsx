import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useState } from 'react';
import { toast } from "react-toastify";

const Do = ({task ,toggleComplete ,deleteTodo ,editTodo }) => {
      const [isEditing, setIsEditing] = useState(false);
      const [newValue, setNewValue] = useState(task.task);

  const handleEdit = (e) => {
    e.preventDefault();
    if (newValue.trim() !== "") {
      editTodo(task.id, newValue);
      setIsEditing(false); // بعد ما يخلص ترجع تاني للوضع العادي
    }
  };

  const handleDelete = () => {
    if (isEditing) {
      toast.info("⚠️ Please finish editing before deleting this task!");
      return;
    }
    deleteTodo(task.id);
  };

  return (
    <div className='List'>
        {isEditing ? (<form style={{zIndex:"0"}} onSubmit={handleEdit}>
        <input type="text"  value={newValue} className="todoInput" onChange={e=>setNewValue(e.target.value)} placeholder="What's the task to day"/>
        <button  type="submit" className="todoBtn" style={{marginTop:"5px" ,width :"auto"}}>Update </button>
    </form>) :
    (<p onClick={()=>toggleComplete(task.id)} style={{textDecoration: task.completed ? "line-through" : "none",cursor:"pointer" ,color: task.completed ? "#C9CDCF" :"black"}}>{task.task}</p>
)}

        <div className='action'>
            <FiEdit style={{color:"#67C090"}} onClick={()=>setIsEditing(true)}></FiEdit>

            <AiFillDelete color="red" onClick={handleDelete}></AiFillDelete>
        </div>
    </div>
  );
}

export default Do
