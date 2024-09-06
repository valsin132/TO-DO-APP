import { useContext } from 'react'
import { ToDoContext } from '../contexts/ToDoContext';
import { FaTasks } from "react-icons/fa";

const Navbar = () => {
    const {tasks} = useContext(ToDoContext);
    
    return (
        <nav className='nav-wrapper'>
            <div className='logo'>
                <FaTasks className='logo-icon' />
                <h1>To-Do List</h1>
            </div>
            <p>All my tasks: {tasks.length}</p>
        </nav>
    );
}
 
export default Navbar;