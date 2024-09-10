import {useContext} from 'react'
import { ToDoContext } from '../contexts/ToDoContext';
import{ ThemeContext } from '../contexts/ThemeContext';
import TaskDetails from './TaskDetails';

const TaskList = () => {
    const {tasks} = useContext(ToDoContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

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
        <div className='empty' style={{ color: theme.syntax }}>Seems lonely in here, what are you up to?</div>
    );
}
 
export default TaskList;