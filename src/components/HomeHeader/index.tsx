import { Bell } from 'phosphor-react-native'

/* STYLES */
import { useTheme } from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { Content, HomeHeaderContainer, Name } from './styles'

export function HomeHeader() {
  const theme = useTheme()

  return (
    <HomeHeaderContainer>
      <LinearGradient
        colors={['rgba(85,82, 255, 100)', 'rgba(85,82, 255, 75)']}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
      >
        <Content>
          <Name>Jane Doe</Name>

          <Bell color={theme.COLORS.WHITE} size={28} />
        </Content>
      </LinearGradient>
    </HomeHeaderContainer>
  )
}
