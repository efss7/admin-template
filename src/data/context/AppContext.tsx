import { createContext, useEffect, useState } from "react";

interface AppContextProps{
    theme?: string
    switchTheme?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props){
    const [theme, setTheme] = useState('dark')

    function switchTheme(){
        const newTheme = theme === '' ? 'dark' : ''
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect(()=>{
        const themeSave = localStorage.getItem("theme")
        setTheme(themeSave)
    }, [])
    return(
        <AppContext.Provider value={{
            theme,
            switchTheme
        }} >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext