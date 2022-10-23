import { useNavigation, useRoute } from '@react-navigation/native'
import { useMutation } from 'react-query'
import { Button } from '../../components/Button'
import { ButtonClose } from '../../components/ButtonClose'
import { Heading } from '../../components/Heading'
import { TrainingProps } from '../../components/Training'
import { api } from '../../services/api'
import { DeleteTrainingContainer, Overlay } from './styles'

interface RouteParams {
  training: TrainingProps
}

export function DeleteTraining() {
  const navigation = useNavigation()

  const route = useRoute()

  const { training } = route.params as RouteParams

  const { mutate, isLoading } = useMutation(
    '@delete-training/modal-delete-training',
    deleteTraining,
  )

  async function deleteTraining() {
    await api.delete(`/trainings/${training.id}`)

    navigation.goBack()
  }

  return (
    <Overlay>
      <DeleteTrainingContainer>
        <ButtonClose onPress={() => navigation.goBack()} />
        <Heading
          title="Excluir treino"
          subtitle={`Você deseja realmente excluir o treino ${training.name}?`}
        />

        <Button
          title="Sim, quero excluir"
          style={{ marginVertical: 24 }}
          onPress={() => mutate()}
          isLoading={isLoading}
        />
        <Button
          title="Cancelar"
          type="GRAY_LIGHT"
          onPress={() => navigation.goBack()}
          disabled={isLoading}
        />
      </DeleteTrainingContainer>
    </Overlay>
  )
}
