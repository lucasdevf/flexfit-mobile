/* REACT */
import { StatusBar, Text } from 'react-native'

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
import { QueryClientProvider } from 'react-query'
import { queryClient } from './src/services/queryClient'
import { AuthContextProvider } from './src/contexts/AuthContext'
import { TrainingContextProvider } from './src/contexts/TrainingContext'

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
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <TrainingContextProvider>
            <Routes />
          </TrainingContextProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
