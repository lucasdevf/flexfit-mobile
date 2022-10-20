/* REACT */
import { useState } from 'react'

/* COMPONENTS */
import { Button } from '../../components/Button'
import { Checkbox } from '../../components/Checkbox'

/* COMPONENTS */
import { HeaderGoBack } from '../../components/HeaderGoBack'

/* STYLES */
import { CreateTrainingWeekdaysContainer, Label, Weekdays } from './styles'

export function CreateTrainingWeekdays() {
  const steps = ['weekdays', 'exercises', 'name']

  const [weekdays, setWeekdays] = useState([
    {
      name: 'Domingo',
      checked: false,
    },
    {
      name: 'Segunda-feira',
      checked: false,
    },
    {
      name: 'Terça-feira',
      checked: false,
    },
    {
      name: 'Quarta-feira',
      checked: false,
    },
    {
      name: 'Quinta-feira',
      checked: false,
    },
    {
      name: 'Sexta-feira',
      checked: false,
    },
    {
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

      <Button title="Continuar" />
    </CreateTrainingWeekdaysContainer>
  )
}
