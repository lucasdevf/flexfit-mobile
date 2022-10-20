import { HeaderGoBack } from '../../components/HeaderGoBack'
import { CreateTrainingWeekdaysContainer, Label } from './styles'

export function CreateTrainingWeekdays() {
  const steps = ['weekdays', 'exercises', 'name']

  return (
    <CreateTrainingWeekdaysContainer>
      <HeaderGoBack
        steps={{
          steps,
          indexActive: 0,
        }}
      />

      <Label>Para quais dias você deseja criar o treino?</Label>
    </CreateTrainingWeekdaysContainer>
  )
}
