import { Image, TouchableOpacityProps } from 'react-native'
import { ButtonSignInWithGoogleContainer, Text } from './styles'

import LogoGoogle from '../../assets/logo-google.png'

export function ButtonSignInWithGoogle(props: TouchableOpacityProps) {
  return (
    <ButtonSignInWithGoogleContainer {...props}>
      <Image source={LogoGoogle} />

      <Text>Entrar com Google</Text>
    </ButtonSignInWithGoogleContainer>
  )
}
