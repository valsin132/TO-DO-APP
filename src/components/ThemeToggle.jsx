import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
// import { MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext)
    return ( 
        // <MdLight className='theme-mode-icon' onClick={toggleTheme} />
        // <button className='button' onClick={toggleTheme}></button>
        <div className='theme-mode-icon'>
        <input type="checkbox" name="switch" id="switch"/>
        <label onClick={toggleTheme} htmlFor="switch"></label>
        </div>
     );
}
 
export default ThemeToggle;
