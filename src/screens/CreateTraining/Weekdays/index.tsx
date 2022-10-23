/* REACT */
import { useContext, useState } from 'react'

/* COMPONENTS */
import { Button } from '../../../components/Button'
import { Checkbox } from '../../../components/Checkbox'

/* COMPONENTS */
import { HeaderGoBack } from '../../../components/HeaderGoBack'

/* STYLES */
import { CreateTrainingWeekdaysContainer, Label, Weekdays } from './styles'

/* NAVIGATION */
import { useNavigation } from '@react-navigation/native'
import { TrainingContext } from '../../../contexts/TrainingContext'

export function CreateTrainingWeekdays() {
  const { handleChangeWeekdays } = useContext(TrainingContext)

  const steps = ['weekdays', 'exercises', 'name']

  const navigation = useNavigation()

  const [weekdays, setWeekdays] = useState([
    {
      value: 0,
      name: 'Domingo',
      checked: false,
    },
    {
      value: 1,
      name: 'Segunda-feira',
      checked: false,
    },
    {
      value: 2,
      name: 'Terça-feira',
      checked: false,
    },
    {
      value: 3,
      name: 'Quarta-feira',
      checked: false,
    },
    {
      value: 4,
      name: 'Quinta-feira',
      checked: false,
    },
    {
      value: 5,
      name: 'Sexta-feira',
      checked: false,
    },
    {
      value: 6,
      name: 'Sábado',
      checked: false,
    },
  ])

  function handleChange(weekday: string) {
    setWeekdays((prevState) =>
      prevState.map((item) => {
        if (item.name === weekday) {
          item.checked = !item.checked
        }

        return item
      }),
    )
  }

  function handleContinue() {
    handleChangeWeekdays(
      weekdays.filter((item) => item.checked).map((item) => item.value),
    )

    navigation.navigate('createTrainingExercises')
  }

  return (
    <CreateTrainingWeekdaysContainer>
      <HeaderGoBack
        steps={{
          steps,
          indexActive: 0,
        }}
      />

      <Label>Para quais dias você deseja criar o treino?</Label>

      <Weekdays>
        {weekdays.map((weekday) => (
          <Checkbox
            key={weekday.name}
            label={weekday.name}
            checked={weekday.checked}
            onCheck={() => handleChange(weekday.name)}
            style={{
              marginBottom: 20,
            }}
          />
        ))}
      </Weekdays>

      {weekdays.some((item) => item.checked) && (
        <Button title="Continuar" onPress={handleContinue} />
      )}
    </CreateTrainingWeekdaysContainer>
  )
}
