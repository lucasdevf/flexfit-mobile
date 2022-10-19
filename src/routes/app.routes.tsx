import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Barbell, ForkKnife, House } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { Home } from '../screens/Home'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
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
        component={Home}
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
