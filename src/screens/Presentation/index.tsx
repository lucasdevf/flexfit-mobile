import { Image } from 'react-native'
import {
  PresentationContainer,
  Content,
  Title,
  Description,
  SignInButton,
  TextSignInButton,
} from './styles'

import ImagePresentation from '../../assets/men-and-woman.png'
import { Button } from '../../components/Button'

export function Presentation() {
  return (
    <PresentationContainer>
      <Image source={ImagePresentation} />

      <Content>
        <Title>Potencialize os resultados do seu treino e sua dieta</Title>

        <Description>
          Monte seus treinos, organize sua dieta, acompanhe os seus resultados,
          acesse conteúdos fit e muito mais
        </Description>
      </Content>

      <Button title="Criar uma conta" type="SECONDARY" />

      <SignInButton>
        <TextSignInButton>Fazer login</TextSignInButton>
      </SignInButton>
    </PresentationContainer>
  )
}
