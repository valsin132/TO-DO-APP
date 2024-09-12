import { useContext, useState } from "react";
import { ToDoContext } from "../contexts/ToDoContext";

const TaskForm = () => {
    const {addTask} = useContext(ToDoContext);
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(task, description)
        setTask('')
        setDescription('')
    };

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Task" value={task} required onChange={(e) => setTask(e.target.value)}/>
            <input type="text" placeholder="Description" value={description}  onChange={(e) => setDescription(e.target.value)}/>
            <input type="submit" value="Add new To-Do" />
        </form>
     );
}
 
export default TaskForm;