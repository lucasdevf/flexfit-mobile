import { Button, ButtonText, Text, TextLoginContainer } from './styles'

export function TextLogin() {
  return (
    <TextLoginContainer>
      <Text>Não tem uma conta?</Text>

      <Button>
        <ButtonText>Cadastre-se</ButtonText>
      </Button>
    </TextLoginContainer>
  )
}
