/* eslint-disable react/prop-types */
import { useContext } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext';
import { ToDoContext } from '../contexts/ToDoContext';
import { RiDeleteBin2Line } from "react-icons/ri";

const TaskDetails = ({task}) => {
    const {removeTask} = useContext(ToDoContext);
    // const {isLightTheme, light, dark} = useContext(ThemeContext);
    // const theme = isLightTheme ? light : dark;

    return ( 
        <li>
            <div>
                <div className="task">{task.task}</div>
                <div className="description">{task.description}</div>
            </div>
            <RiDeleteBin2Line className='delete-icon' onClick={() => removeTask(task.id)} />
        </li>
     );
}
 
export default TaskDetails;