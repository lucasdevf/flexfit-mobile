import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BottomTabRoutes } from './app/bottom-tabs.routes'

/* SCREENS */
import { MyTrainings } from '../screens/MyTrainings'
import { CreateTrainingWeekdays } from '../screens/CreateTrainingWeekdays'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="appBottomTabs" component={BottomTabRoutes} />

        <Screen name="myTrainings" component={MyTrainings} />
        <Screen
          name="createTrainingWeekdays"
          component={CreateTrainingWeekdays}
        />
      </Navigator>
    </>
  )
}
