/* eslint-disable react/prop-types */
import { useContext } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext';
import { ToDoContext } from '../contexts/ToDoContext';
import { RiDeleteBin2Line } from "react-icons/ri";

const BookDetails = ({task}) => {
    const {removeTask} = useContext(ToDoContext);
    // const {isLightTheme, light, dark} = useContext(ThemeContext);
    // const theme = isLightTheme ? light : dark;

    return ( 
        <li>
            <div>
                <div className="title">{task.title}</div>
                <div className="author">{task.author}</div>
            </div>
            <RiDeleteBin2Line onClick={() => removeTask(task.id)} />
        </li>
     );
}
 
export default BookDetails;