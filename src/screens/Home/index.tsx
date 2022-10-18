import { HomeHeader } from '../../components/HomeHeader'
import { Weight } from '../../components/Weight'
import { Content, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HomeHeader />

      <Content>
        <Weight />
      </Content>
    </HomeContainer>
  )
}
