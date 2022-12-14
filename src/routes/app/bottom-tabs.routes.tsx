import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Barbell, ForkKnife, House } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

/* SCREENS */
import { Home } from '../../screens/Home'
import { Training } from '../../screens/Training'

const { Navigator, Screen } = createBottomTabNavigator()

export function BottomTabRoutes() {
  const { COLORS } = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.YELLOW_500,
        tabBarInactiveTintColor: COLORS.GRAY_300,
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House weight="fill" color={color} size={28} />
          ),
        }}
      />
      <Screen
        name="training"
        component={Training}
        options={{
          tabBarIcon: ({ color }) => <Barbell color={color} size={28} />,
        }}
      />
      <Screen
        name="diet"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <ForkKnife color={color} size={28} />,
        }}
      />
    </Navigator>
  )
}
