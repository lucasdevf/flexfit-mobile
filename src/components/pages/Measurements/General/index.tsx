import { Form, GeneralContainer, Guidance, InputStyled } from './styles'
import { Keyboard } from 'react-native'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../../../Button'
import { api } from '../../../../services/api'
import { useMutation, useQuery } from 'react-query'
import { Error } from '../../../Error'

const formSchema = z.object({
  weight: z.string().min(1, 'Campo obrigatório'),
  height: z.string().min(1, 'Campo obrigatório'),
})

type FormType = z.infer<typeof formSchema>

export interface MeasurementProps {
  id: string
  weight: number
  height: number
}

export function General() {
  const {
    data: measurements,
    error: errorFetch,
    isFetched,
    isLoading: isLoadingfetch,
  } = useQuery<MeasurementProps>(
    '@measurements/measurements',
    fetchMeasurements,
    {
      cacheTime: 0,
    },
  )

  async function fetchMeasurements() {
    const response = await api.get('/users/measurements/last')

    return response.data
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  })

  const { mutate, error, isLoading } = useMutation(
    '@register-measurements/measurements',
    save,
  )

  async function save(data: FormType) {
    Keyboard.dismiss()

    const { weight, height } = data

    await api.post('/users/measurements', {
      weight: Number(weight),
      height: Number(height),
    })
  }

  function hideButtonSave() {
    const weightInput = Number(watch('weight'))
    const heightInput = Number(watch('height'))

    if (measurements) {
      const { weight, height } = measurements

      if (weightInput === weight && heightInput === height) {
        return true
      }

      return false
    }

    return false
  }

  if (isFetched) {
    return (
      <GeneralContainer keyboardShouldPersistTaps="handled">
        <Form>
          <InputStyled
            label="Peso (kg)"
            name="weight"
            control={control}
            errors={errors}
            style={{ marginRight: 20 }}
            placeholder="Digite o seu peso"
            keyboardType="number-pad"
            defaultValue={String(measurements?.weight ?? '')}
          />
          <InputStyled
            label="Altura (m)"
            name="height"
            control={control}
            errors={errors}
            placeholder="Digite a sua altura"
            keyboardType="number-pad"
            defaultValue={String(measurements?.height ?? '')}
          />
        </Form>

        <Guidance>
          * Recomendamos que a atualização desses valores seja feita apenas uma
          vez por mês
        </Guidance>

        {error && errorFetch && <Error error={String(error ?? errorFetch)} />}

        {!hideButtonSave() && (
          <Button
            title="Salvar"
            onPress={handleSubmit(mutate)}
            isLoading={isLoading || isLoadingfetch}
          />
        )}
      </GeneralContainer>
    )
  }
}
