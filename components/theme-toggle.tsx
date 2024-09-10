'use client'

import React from 'react'
import { Button } from './ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

const ToggleTheme = () => {

    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === 'dark'? 'light' : 'dark')
    }

  return (
    <Button className='self-center' onClick={toggleTheme} variant="outline" size="icon">
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] text-light w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}

export default ToggleTheme