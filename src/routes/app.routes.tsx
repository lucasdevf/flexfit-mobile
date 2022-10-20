import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BottomTabRoutes } from './app/bottom-tabs.routes'

/* SCREENS */
import { MyTrainings } from '../screens/MyTrainings'
import { CreateTrainingWeekdays } from '../screens/CreateTraining/Weekdays'
import { CreateTrainingExercises } from '../screens/CreateTraining/Exercises'
import { AddExercise } from '../screens/CreateTraining/AddExercise'

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
        <Screen
          name="createTrainingExercises"
          component={CreateTrainingExercises}
        />

        <Screen
          name="addExercise"
          component={AddExercise}
          options={{
            presentation: 'containedTransparentModal',
            animation: 'fade_from_bottom',
          }}
        />
      </Navigator>
    </>
  )
}
