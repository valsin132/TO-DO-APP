/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ( props ) => {
    const [isLightTheme, setIsLightTheme] = useState(true);

    const theme = {
        isLightTheme,
        light: { syntax: '#000', bg: '#fff' },
        dark: { syntax: '#fff', bg: '#151922' }
    };

    const toggleTheme = () => {
        setIsLightTheme(prevIsLightTheme => !prevIsLightTheme);
    };

    return (
        <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
