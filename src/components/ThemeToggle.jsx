import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ThemeToggle = () => {
    const { isLightTheme, toggleTheme } = useContext(ThemeContext);

    return ( 
        <div className='theme-mode-icon'>
        <input 
            type="checkbox" 
            name="switch" 
            id="switch"
            checked={!isLightTheme}
            onChange={toggleTheme}/>
        <label htmlFor="switch"></label>
        </div>
     );
}
 
export default ThemeToggle;
