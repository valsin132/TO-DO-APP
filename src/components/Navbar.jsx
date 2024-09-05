import { useContext } from 'react'
import { ToDoContext } from '../contexts/ToDoContext';
import { FaTasks } from "react-icons/fa";

const Navbar = () => {
    const {tasks} = useContext(ToDoContext);
    const currentYear = new Date().getFullYear();
    
    return (
        <nav>
            <div className='navbar'>
                <h1><FaTasks /> To-Do List {currentYear}</h1>
                <p>All my tasks: {tasks.length}</p>
            </div>
        </nav>
    );
}
 
export default Navbar;