'use client'

import { Theme } from '@carbon/react'
import { createContext, ReactNode, useContext, useState } from 'react'

type ThemeType = 'white' | 'g100'

interface ThemeContextType {
    theme: ThemeType
    toggleTheme: (newTheme: ThemeType) => void
}

interface ThemeProviderProps {
    children: ReactNode
}

const ThemeContext = createContext<ThemeContextType>({
    theme: 'g100', // 默认主题
    toggleTheme: () => {}, // 默认的空函数
})

export const ThemeProdiver: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeType>('g100')

    const toggleTheme = (newTheme: ThemeType) => {
        setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Theme theme={theme}>{children}</Theme>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
