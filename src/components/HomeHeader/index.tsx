import { Bell } from 'phosphor-react-native'

/* STYLES */
import { useTheme } from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { Content, HomeHeaderContainer, Name } from './styles'
import { useContext, useEffect, useState } from 'react'
import { AuthContext, TokenProps } from '../../contexts/AuthContext'

export function HomeHeader() {
  const theme = useTheme()

  const { getUserData } = useContext(AuthContext)

  const [userData, setUserData] = useState({} as TokenProps)

  async function loadUserData() {
    const tokenData = await getUserData()

    setUserData(tokenData)
  }

  useEffect(() => {
    loadUserData()
  }, [])

  return (
    <HomeHeaderContainer>
      <LinearGradient
        colors={['rgba(85,82, 255, 100)', 'rgba(85,82, 255, 75)']}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
      >
        <Content>
          <Name>{userData.name}</Name>

          <Bell color={theme.COLORS.WHITE} size={28} />
        </Content>
      </LinearGradient>
    </HomeHeaderContainer>
  )
}
