import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext)
    return ( 
        <MdLightMode className='theme-mode-icon' onClick={toggleTheme} />
     );
}
 
export default ThemeToggle;
