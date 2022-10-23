import { NavigationContainer } from '@react-navigation/native'

/* ROUTES */
import { LoggedOutRoutes } from './logged-out.routes'
import { AppRoutes } from './app.routes'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export function Routes() {
  const { isSigned } = useContext(AuthContext)

  return (
    <NavigationContainer>
      {isSigned ? <AppRoutes /> : <LoggedOutRoutes />}
    </NavigationContainer>
  )
}
