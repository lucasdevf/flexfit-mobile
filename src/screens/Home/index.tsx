/* ICONS */
import { Ruler, Crosshair, ListChecks } from 'phosphor-react-native'

/* COMPONENTS */
import { ButtonIcon } from '../../components/ButtonIcon'
import { HomeHeader } from '../../components/HomeHeader'
import { StatusTraining } from '../../components/StatusTraining'
import { Weight } from '../../components/Weight'

/* STYLES */
import { Content, HomeContainer, Buttons } from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'react-native'

export function Home() {
  return (
    <LinearGradient
      colors={['rgba(85,82, 255, 100)', 'rgba(85,82, 255, 75)']}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
      style={{
        flex: 1,
      }}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <HomeContainer>
        <HomeHeader />

        <Content>
          <StatusTraining />

          <Weight />

          <Buttons>
            <ButtonIcon
              onPress={() => signOut()}
              icon={<Ruler />}
              title="Medidas"
            />
            <ButtonIcon icon={<Crosshair />} title="Metas" />
            <ButtonIcon icon={<ListChecks />} title="Histórico" />
          </Buttons>
        </Content>
      </HomeContainer>
    </LinearGradient>
  )
}
