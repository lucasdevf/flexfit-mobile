import { NavigationContainer } from '@react-navigation/native'

import AsyncStorage from '@react-native-async-storage/async-storage'

/* ROUTES */
import { LoggedOutRoutes } from './logged-out.routes'
import { AppRoutes } from './app.routes'

export function Routes() {
  const isSignedIn = !!AsyncStorage.getItem('@flexFit:token-auth')

  return (
    <NavigationContainer>
      {isSignedIn ? <AppRoutes /> : <LoggedOutRoutes />}
    </NavigationContainer>
  )
}
