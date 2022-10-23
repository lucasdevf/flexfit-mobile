import { useNavigation } from '@react-navigation/native'
import { Button } from '../../../components/Button'
import { HeaderGoBack } from '../../../components/HeaderGoBack'
import { Input } from '../../../components/Input'
import { CreateTrainingNameContainer } from './styles'

/* FORM */
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TrainingContext } from '../../../contexts/TrainingContext'
import { useMutation } from 'react-query'
import { api } from '../../../services/api'

const formSchema = z.object({
  name: z.string().min(1, 'Este campo é obrigatório'),
})

type FormType = z.infer<typeof formSchema>

export function CreateTrainingName() {
  const { training } = useContext(TrainingContext)

  const steps = ['weekdays', 'exercises', 'name']

  const navigation = useNavigation()

  const { control, handleSubmit } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  })

  const { mutate, isLoading } = useMutation(
    '@create-training/create-training',
    createTraining,
  )

  async function createTraining(data: FormType) {
    const { name } = data

    const { weekdays, exercises } = training

    await api.post('/trainings', {
      name,
      weekdays,
      exercises,
    })

    navigation.navigate('myTrainings')
  }

  return (
    <CreateTrainingNameContainer>
      <HeaderGoBack
        steps={{
          steps,
          indexActive: 2,
        }}
      />

      <Input
        label="Dê um nome para o seu treino"
        placeholder="Digite o nome do treino"
        name="name"
        control={control}
      />

      <Button
        title="Finalizar"
        style={{ marginTop: 20 }}
        onPress={handleSubmit(mutate)}
        isLoading={isLoading}
      />
    </CreateTrainingNameContainer>
  )
}
