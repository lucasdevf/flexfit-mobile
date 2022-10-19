import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MyTrainings } from '../../screens/MyTrainings'

/* SCREENS */
const { Navigator, Screen } = createNativeStackNavigator()

export function StackNavigatorRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="myTrainings" component={MyTrainings} />
    </Navigator>
  )
}
