/* REACT */
import { Text } from 'react-native'

/* STYLES */
import { ThemeProvider } from 'styled-components'
import { Presentation } from './src/screens/Presentation'
import { SignIn } from './src/screens/SignIn'
import { Home } from './src/screens/Home'
import { defaultTheme } from './src/styles/themes/default'

/* FONTS */
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat'

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
  })

  if (!fontsLoaded) {
    return <Text>Carregando..</Text>
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
  )
}
