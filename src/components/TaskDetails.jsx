/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext';
import { ToDoContext } from '../contexts/ToDoContext';
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdOutlineDoneOutline } from "react-icons/md";

const TaskDetails = ({task}) => {
    const [completed, setCompleted] = useState(false);
    const {removeTask} = useContext(ToDoContext);
    // const {isLightTheme, light, dark} = useContext(ThemeContext);
    // const theme = isLightTheme ? light : dark;

    const handleComplete = () => {
        setCompleted(!completed)
    }

    return ( 
        <li className={completed ? 'task-completed' : ''}>
            <div>
                <div className="task">{task.task}</div>
                <div className="description">{task.description}</div>
            </div>
            <div>
                <RiDeleteBin2Line className='delete-icon' onClick={() => removeTask(task.id)} />
                <MdOutlineDoneOutline className='complete-icon' onClick={handleComplete} />
            </div>
        </li>
     );
}
 
export default TaskDetails;