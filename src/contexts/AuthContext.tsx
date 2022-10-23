import React, { ReactNode, useState, createContext } from 'react'

import jwtDecode from 'jwt-decode'

import AsyncStorage from '@react-native-async-storage/async-storage'

export interface TokenProps {
  name: string
  email: string
}

interface AuthContextType {
  isSigned: boolean
  setIsSigned: React.Dispatch<React.SetStateAction<boolean>>

  getUserData: () => Promise<TokenProps>
}

export const AuthContext = createContext({} as AuthContextType)

interface AuthContextProviderProps {
  children: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [isSigned, setIsSigned] = useState(false)

  async function getUserData(): Promise<TokenProps> {
    const tokenAuth = (await AsyncStorage.getItem(
      '@flexFit:token-auth',
    )) as string

    const userDataToken = jwtDecode<TokenProps>(tokenAuth)

    return userDataToken
  }

  return (
    <AuthContext.Provider
      value={{
        isSigned,
        setIsSigned,
        getUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
