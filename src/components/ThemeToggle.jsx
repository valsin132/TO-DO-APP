import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext)
    return ( 
        <button onClick={toggleTheme}>Light Mode / Dark Mode</button>
     );
}
 
export default ThemeToggle;
