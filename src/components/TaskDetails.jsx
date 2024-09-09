/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdOutlineDoneOutline } from "react-icons/md";

const TaskDetails = ({task}) => {
    const {removeTask, toggleTaskCompletion} = useContext(ToDoContext);
    const handleComplete = () => {
        toggleTaskCompletion(task.id)
    };

    
    return ( 
        <li className={task.isCompleted ? 'task-completed' : ''}>
            <div>
                <div className='task'>{task.task}</div>
                <div className='description'>{task.description}</div>
            </div>
            <div className='task-icons'>
                <RiDeleteBin2Line className='delete-icon' onClick={() => removeTask(task.id)} />
                <MdOutlineDoneOutline className='complete-icon' onClick={handleComplete} />
            </div>
        </li>
     );
}
 
export default TaskDetails;