import { useContext } from 'react'
import { TrainingContext } from '../../contexts/TrainingContext'
import { ButtonDelete } from '../ButtonDelete'
import { Content, Details, ExerciseContainer, Name } from './styles'

export interface ExerciseProps {
  id?: string
  name: string
  series: number
  repetitions: number
  created_at?: string
  updated_at?: string
}

interface Props {
  data: ExerciseProps
}

export function Exercise({ data }: Props) {
  const { handleRemoveExercise } = useContext(TrainingContext)

  return (
    <ExerciseContainer>
      <Content>
        <Name>{data.name}</Name>
        <Details>{`• ${data.series}x de ${data.repetitions} ${
          data.repetitions === 1 ? 'repetição' : 'repetições'
        }`}</Details>
      </Content>

      <ButtonDelete onDelete={() => handleRemoveExercise(data)} />
    </ExerciseContainer>
  )
}
