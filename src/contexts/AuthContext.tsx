import React, { ReactNode, useState, createContext } from 'react'

interface AuthContextType {
  isSigned: boolean
  setIsSigned: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext({} as AuthContextType)

interface AuthContextProviderProps {
  children: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [isSigned, setIsSigned] = useState(false)

  return (
    <AuthContext.Provider
      value={{
        isSigned,
        setIsSigned,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
