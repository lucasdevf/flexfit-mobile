/* REACT */
import { Image, StatusBar } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useContext, useState } from 'react'

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
import { Error } from '../../components/Error'

/* FORM */
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

/* API */
import { api } from '../../services/api'

/* CONTEXT */
import { AuthContext } from '../../contexts/AuthContext'

const formSchema = z.object({
  email: z
    .string()
    .email('Informe um e-mail válido')
    .min(1, 'Este campo é obrigatório'),
  password: z.string().min(1, 'Este campo é obrigatório.'),
})

type FormType = z.infer<typeof formSchema>

export function SignIn() {
  const navigation = useNavigation()

  const { setIsSigned } = useContext(AuthContext)

  const { control, handleSubmit } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  })

  const [errorRequest, setErrorRequest] = useState('')

  async function signIn(data: FormType) {
    try {
      const response = await api.post('/auth/login', data)

      setIsSigned(true)

      await AsyncStorage.setItem(
        '@flexFit:token-auth',
        response.data.access_token,
      )

      navigation.navigate('appBottomTabs')
    } catch (error) {
      console.log(error)
      setErrorRequest(String(error))
    }
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
        {errorRequest && <Error error={errorRequest} />}

        <Input
          label="Email"
          name="email"
          keyboardType="email-address"
          control={control}
          placeholder="Digite seu e-mail"
        />
        <Input
          label="Senha"
          name="password"
          secureTextEntry
          control={control}
          placeholder="Digite sua senha"
        />

        <ForgotPassword>
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPassword>

        <Button title="Entrar" onPress={handleSubmit(signIn)} />

        <ButtonSignInWithGoogle />
      </Form>

      <TextLogin />
    </SignInContainer>
  )
}
