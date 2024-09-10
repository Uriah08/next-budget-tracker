'use client'

import { ReactNode } from "react"
import { ThemeProvider } from "../theme-provider"

const RootProvider = ({children} : {children: ReactNode}) => {

  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}

export default RootProvider