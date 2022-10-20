import { NavigationContainer } from '@react-navigation/native'

/* ROUTES */
import { LoggedOutRoutes } from './logged-out.routes'
import { AppRoutes } from './app.routes'

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}
