import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { ToDoContext } from '../contexts/ToDoContext';
import ThemeToggle from './ThemeToggle';
import { FaTasks } from "react-icons/fa";

const Navbar = () => {
    const {tasks} = useContext(ToDoContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    
    return (
        <nav className='nav-wrapper' style={{ color: theme.syntax }}>
            <div className='logo'>
                <FaTasks className='logo-icon' />
                <h1 className='logo-name'>To-Do List</h1>
            </div>
            <ThemeToggle />
            <p>All my tasks: {tasks.length}</p>
        </nav>
    );
}
 
export default Navbar;