import { ButtonDelete } from '../ButtonDelete'
import { Content, Details, ExerciseContainer, Name } from './styles'

export interface ExerciseProps {
  name: string
  series: number
  repetitions: number
}

interface Props {
  data: ExerciseProps
}

export function Exercise({ data }: Props) {
  return (
    <ExerciseContainer>
      <Content>
        <Name>{data.name}</Name>
        <Details>{`• ${data.series}x de ${data.repetitions} ${
          data.repetitions === 1 ? 'repetição' : 'repetições'
        }`}</Details>
      </Content>

      <ButtonDelete onDelete={() => {}} />
    </ExerciseContainer>
  )
}
