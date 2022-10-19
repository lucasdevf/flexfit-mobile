/* REACT */
import { Image } from 'react-native'

/* NAVIGATION */
import { useNavigation } from '@react-navigation/native'

/* STYLES */
import {
  PresentationContainer,
  Content,
  Title,
  Description,
  SignInButton,
  TextSignInButton,
} from './styles'

/* ASSETS */
import ImagePresentation from '../../assets/men-and-woman.png'

/* COMPONENTS */
import { Button } from '../../components/Button'

export function Presentation() {
  const navigation = useNavigation()

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

      <SignInButton onPress={() => navigation.navigate('signIn')}>
        <TextSignInButton>Fazer login</TextSignInButton>
      </SignInButton>
    </PresentationContainer>
  )
}
