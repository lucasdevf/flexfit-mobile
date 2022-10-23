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

/* FORM */
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../services/api'
import { useContext, useState } from 'react'
import { Error } from '../../components/Error'
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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  })

  const [errorRequest, setErrorRequest] = useState('')

  async function signIn(data: FormType) {
    try {
      await api.post('/auth/login', data)

      setIsSigned(true)

      await AsyncStorage.setItem('@flexFit:token-auth', '123')

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
        />
        <Input
          label="Senha"
          name="password"
          secureTextEntry
          control={control}
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
