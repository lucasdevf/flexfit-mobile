import { NavigationContainer } from '@react-navigation/native'
import { LoggedOutRoutes } from './logged-out.routes'

export function Routes() {
  return (
    <NavigationContainer>
      <LoggedOutRoutes />
    </NavigationContainer>
  )
}
