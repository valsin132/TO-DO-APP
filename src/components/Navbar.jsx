import { useContext } from 'react'
import { ToDoContext } from '../contexts/ToDoContext';
import { FaTasks } from "react-icons/fa";

const Navbar = () => {
    const {tasks} = useContext(ToDoContext);
    
    return (
        <nav>
            <div className='navbar'>
                <h1><FaTasks /> To-Do List</h1>
                <p>All my tasks: {tasks.length}</p>
            </div>
        </nav>
    );
}
 
export default Navbar;