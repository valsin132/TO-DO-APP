import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext)
    return ( 
        <div className='theme-mode-icon'>
        <input type="checkbox" name="switch" id="switch"/>
        <label onClick={toggleTheme} htmlFor="switch"></label>
        </div>
     );
}
 
export default ThemeToggle;
