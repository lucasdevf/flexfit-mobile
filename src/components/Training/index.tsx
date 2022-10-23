import { useNavigation } from '@react-navigation/native'
import { ButtonDelete } from '../ButtonDelete'
import { Content, TrainingContainer, Title, Weekdays } from './styles'

export interface TrainingProps {
  id: string
  name: string
  weekdays: number[]
}

interface Props {
  data: TrainingProps
}

export function Training({ data }: Props) {
  const navigation = useNavigation()

  function renderWeekdays() {
    if (data.weekdays.length === 7) {
      return 'Todos os dias'
    }

    const weekdays: string[] = []

    data.weekdays.forEach((weekday) => {
      switch (weekday) {
        case 0:
          weekdays.push('DOM')
          break
        case 1:
          weekdays.push('SEG')
          break
        case 2:
          weekdays.push('TER')
          break
        case 3:
          weekdays.push('QUA')
          break
        case 4:
          weekdays.push('QUI')
          break
        case 5:
          weekdays.push('SEX')
          break
        case 6:
          weekdays.push('SAB')
          break
      }
    })

    return weekdays.join(' | ')
  }

  return (
    <TrainingContainer>
      <Content>
        <Title>{data.name}</Title>
        <Weekdays>{renderWeekdays()}</Weekdays>
      </Content>

      <ButtonDelete
        onDelete={() =>
          navigation.navigate('deleteTraining', { training: data })
        }
      />
    </TrainingContainer>
  )
}
