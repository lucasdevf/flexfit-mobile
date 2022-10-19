/* REACT */
import { Image, StatusBar } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

/* NAVIGATION */
import { useNavigation } from '@react-navigation/native'

/* STYLES */
import {
  SignInContainer,
  Form,
  ForgotPassword,
  ForgotPasswordText,
  Input,
  Button,
} from './styles'

/* ASSETS */
import Logo from '../../assets/logo.png'

/* COMPONENTS */
import { ButtonSignInWithGoogle } from '../../components/ButtonSignInWithGoogle'
import { TextLogin } from '../../components/TextLogin'

export function SignIn() {
  const navigation = useNavigation()

  async function handleSignIn() {
    await AsyncStorage.setItem('@flexFit:token-auth', '123')

    navigation.navigate('appBottomTabs')
  }

  return (
    <SignInContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <Image source={Logo} />

      <Form>
        <Input label="Email" keyboardType="email-address" />
        <Input label="Senha" secureTextEntry />

        <ForgotPassword>
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPassword>

        <Button title="Entrar" onPress={handleSignIn} />

        <ButtonSignInWithGoogle />
      </Form>

      <TextLogin />
    </SignInContainer>
  )
}
