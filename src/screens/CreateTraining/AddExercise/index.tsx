/* COMPONENTS */
import { Button } from '../../../components/Button'
import { ButtonClose } from '../../../components/ButtonClose'
import { Heading } from '../../../components/Heading'
import { Input } from '../../../components/Input'

/* STYLES */
import { AddExerciseContainer, Form, Row, InputStyled, Overlay } from './styles'

/* NAVIGATION */
import { useNavigation } from '@react-navigation/native'

/* FORM */
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState } from 'react'
import { TrainingContext } from '../../../contexts/TrainingContext'
import { Error } from '../../../components/Error'

const formSchema = z.object({
  name: z.string().min(1, 'Este campo é obrigatório.'),
  series: z.string().min(1, 'Mínimo 1'),
  repetitions: z.string().min(1, 'Mínimo 1'),
})

type FormType = z.infer<typeof formSchema>

export function AddExercise() {
  const { handleAddExercise } = useContext(TrainingContext)

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  })

  const [error, setError] = useState('')

  const navigation = useNavigation()

  function addExercise(data: FormType) {
    const { name, series, repetitions } = data

    try {
      handleAddExercise({
        name,
        series: Number(series),
        repetitions: Number(repetitions),
      })

      setError('')

      reset()
    } catch (err: any) {
      setError(String(err?.message))
    }
  }

  return (
    <Overlay>
      <AddExerciseContainer>
        <ButtonClose onPress={() => navigation.goBack()} />

        <Heading
          title="Adicionar exercício"
          subtitle="Preencha os campos e adicione o exercício ao seu treino"
        />

        <Form>
          <Input
            label="Nome"
            name="name"
            placeholder="Digite o nome do exercício"
            control={control}
            errors={errors}
          />

          <Row>
            <InputStyled
              label="Séries"
              name="series"
              placeholder="Nº séries"
              style={{
                marginRight: 20,
              }}
              control={control}
              keyboardType="numeric"
              errors={errors}
            />

            <InputStyled
              label="Repetições"
              name="repetitions"
              placeholder="Nº repetições"
              control={control}
              keyboardType="numeric"
              errors={errors}
            />
          </Row>

          {error && (
            <Error error={String(error)} style={{ marginBottom: 20 }} />
          )}

          <Button title="Adicionar" onPress={handleSubmit(addExercise)} />
        </Form>
      </AddExerciseContainer>
    </Overlay>
  )
}
