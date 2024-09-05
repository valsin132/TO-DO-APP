import {useContext} from 'react'
import { ToDoContext } from '../contexts/ToDoContext';
import TaskDetails from './TaskDetails';

const TaskList = () => {
    const {tasks} = useContext(ToDoContext);
    return tasks.length
    ? (
        <div className='task-list'>
            <ul>
                {tasks.map(task => {
                    return (
                        <TaskDetails task={task} key={task.id} />
                    )
                })}
            </ul>
        </div>
    )
    : (
        <div className="empty">Seems lonely in here, what are you up to?</div>
    );
}
 
export default TaskList;