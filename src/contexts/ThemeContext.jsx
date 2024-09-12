/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ( props ) => {
    const [isLightTheme, setIsLightTheme] = useState(() => {
        const storedTheme = localStorage.getItem('isLightTheme');
        return storedTheme ? JSON.parse(storedTheme) : true;
    });

    useEffect(() => {
        localStorage.setItem('isLightTheme', JSON.stringify(isLightTheme))
    }, [isLightTheme]);

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
