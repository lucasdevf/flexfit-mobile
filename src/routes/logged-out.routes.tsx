import { createNativeStackNavigator } from '@react-navigation/native-stack'

/* SCREENS */
import { Presentation } from '../screens/Presentation'
import { SignIn } from '../screens/SignIn'
import { Home } from '../screens/Home'

const { Navigator, Screen } = createNativeStackNavigator()

export function LoggedOutRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="presentation" component={Presentation} />

      <Screen name="signIn" component={SignIn} />

      <Screen name="home" component={Home} />
    </Navigator>
  )
}
