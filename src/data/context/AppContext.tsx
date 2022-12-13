import { createContext, useState } from "react";

type Theme = 'dark' | ''

interface AppContextProps{
    theme?: Theme
    switchTheme?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props:AppContextProps){
    const [theme, setTheme] = useState<Theme>('')

    function switchTheme(){
        setTheme(theme === "" ? 'dark' : '')
    }
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