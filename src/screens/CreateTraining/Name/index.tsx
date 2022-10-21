import { useNavigation } from '@react-navigation/native'
import { Button } from '../../../components/Button'
import { HeaderGoBack } from '../../../components/HeaderGoBack'
import { Input } from '../../../components/Input'
import { CreateTrainingNameContainer } from './styles'

export function CreateTrainingName() {
  const steps = ['weekdays', 'exercises', 'name']

  const navigation = useNavigation()

  return (
    <CreateTrainingNameContainer>
      <HeaderGoBack
        steps={{
          steps,
          indexActive: 1,
        }}
      />

      <Input
        label="Dê um nome para o seu treino"
        placeholder="Digite o nome do treino"
      />

      <Button
        title="Finalizar"
        style={{ marginTop: 20 }}
        onPress={() => navigation.navigate('myTrainings')}
      />
    </CreateTrainingNameContainer>
  )
}
