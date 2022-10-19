/* ICONS */
import { Ruler, Crosshair, ListChecks } from 'phosphor-react-native'

/* COMPONENTS */
import { ButtonIcon } from '../../components/ButtonIcon'
import { HomeHeader } from '../../components/HomeHeader'
import { Weight } from '../../components/Weight'

/* STYLES */
import { Content, HomeContainer, Buttons } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HomeHeader />

      <Content>
        <Weight />

        <Buttons>
          <ButtonIcon icon={<Ruler />} title="Medidas" />
          <ButtonIcon icon={<Crosshair />} title="Metas" />
          <ButtonIcon icon={<ListChecks />} title="Histórico" />
        </Buttons>
      </Content>
    </HomeContainer>
  )
}
