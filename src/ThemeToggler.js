import React, { useState } from 'react'
import Sun from './icons/Sun'
import Moon from './icons/Moon'

const ThemeToggler = () => {
    const [ theme, setTheme ] = useState(document.documentElement.getAttribute('data-theme'))

    const toggleTheme = () => {
        const darkTheme = (!theme || theme === 'dark')

        document.documentElement.classList.add('theme-transition')
        document.documentElement.setAttribute('data-theme', darkTheme ? 'light' : 'dark')
        setTheme(darkTheme ? 'light' : 'dark')
        window.setTimeout(() => document.documentElement.classList.remove('theme-transition'), 1000)
    }

    return(
        <button className="them-toggle-button" onClick={toggleTheme}>
            {(!theme || theme === 'dark') ? <Sun /> : <Moon />}
        </button>
    )
}

export default ThemeToggler