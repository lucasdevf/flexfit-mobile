/* COMPONENTS */
import { Button } from '../../../components/Button'
import { ButtonClose } from '../../../components/ButtonClose'
import { Heading } from '../../../components/Heading'
import { Input } from '../../../components/Input'

/* STYLES */
import { AddExerciseContainer, Form, Row, InputStyled, Overlay } from './styles'

/* NAVIGATION */
import { useNavigation } from '@react-navigation/native'

export function AddExercise() {
  const navigation = useNavigation()

  return (
    <Overlay>
      <AddExerciseContainer>
        <ButtonClose onPress={() => navigation.goBack()} />

        <Heading
          title="Adicionar exercício"
          subtitle="Preencha os campos e adicione o exercício ao seu treino"
        />

        <Form>
          <Input label="Nome" placeholder="Digite o nome do exercício" />

          <Row>
            <InputStyled
              label="Séries"
              placeholder="Nº séries"
              style={{
                marginRight: 20,
              }}
            />

            <InputStyled label="Repetições" placeholder="Nº repetições" />
          </Row>

          <Button title="Adicionar" />
        </Form>
      </AddExerciseContainer>
    </Overlay>
  )
}
