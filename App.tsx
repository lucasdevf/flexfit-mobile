/* REACT */
import { Text } from 'react-native'

/* STYLES */
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './src/styles/themes/default'

/* FONTS */
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat'

/* ROUTES */
import { Routes } from './src/routes'

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
      <Routes />
    </ThemeProvider>
  )
}
