/* REACT */
import { Image, StatusBar } from 'react-native'

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
  return (
    <SignInContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <Image source={Logo} />

      <Form>
        <Input label="Email" keyboardType="email-address" />
        <Input label="Senha" secureTextEntry />

        <ForgotPassword>
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPassword>

        <Button title="Entrar" />

        <ButtonSignInWithGoogle />
      </Form>

      <TextLogin />
    </SignInContainer>
  )
}
