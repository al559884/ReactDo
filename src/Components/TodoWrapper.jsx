import { useState, useEffect } from "react";
import ToDoForm from "./ToDoForm";
import Do from "./Do";
import Spinner from "./Spinner";
import "./style.css";
import { toast } from "react-toastify";


const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const[loading ,setLoading]=useState(true)

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("http://localhost:5000/todos");
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
        toast.error("❌ Failed to fetch todos. Please try again!");

      }finally{
        setLoading(false)
      }
    };
    fetchTodos();
  }, []);

  /* BEFORE the json.server 
    const addTodo = todo => {
      setTodos([...todos ,{id :Date.now() , task:todo ,completed:false }])
    };
  */

  const addTodo = async (todo) => {
    try {
      const res = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: todo, completed: false }),
      });

      const newTodo = await res.json();
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  /*BEFORE the json.server 
  const toggleComplete =(id)=>{
    setTodos(
      todos.map((todo)=>
      todo.id==id? {...todo ,completed :!todo.completed}:todo
    )
  );
  };
*/


  const toggleComplete = async (id) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    try {
      const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: !todo.completed }),
      });
      const updatedTodo = await res.json();
      setTodos(todos.map((t) => (t.id === id ? updatedTodo : t)));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };



  /* BEFORE the json.server 
const deleteTodo=(id)=>{
  setTodos(todos.filter((todo=>
    todo.id !==id
  )))
}
  */



  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((t) => t.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };


  /* BEFORE the json.server
  const editTodo = (id, newTask) => {
  setTodos(
    todos.map((todo) => (todo.id === id ? { ...todo, task: newTask } : todo))
  );
};

*/

  const editTodo = async (id, newTask) => {
    try {
      const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task: newTask }),
      });
      const updatedTodo = await res.json();
      setTodos(todos.map((t) => (t.id === id ? updatedTodo : t)));
    } catch (error) {
      console.error("Error editing todo:", error);
    }
  };

return (
  <div className="todoWra">
    {loading ? (
      <Spinner /> 
    ) : (
      <>
        <ToDoForm addTodo={addTodo} hasTodo={todos.length > 0} />
        {todos.map((todo) => (
          <Do
            key={todo.id}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </>
    )}
  </div>
);

};

export default TodoWrapper;












