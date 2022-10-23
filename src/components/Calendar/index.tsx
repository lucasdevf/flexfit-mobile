/* REACT */
import { useEffect, useState } from 'react'

/* LIBS */
import { addMonths, format, subMonths } from 'date-fns'
import { CaretLeft, CaretRight } from 'phosphor-react-native'

/* STYLES */
import {
  CalendarContainer,
  Header,
  Month,
  Weekdays,
  Weekday,
  ButtonMoveMonths,
} from './styles'
import ptBR from 'date-fns/locale/pt-BR'

export function Calendar() {
  const [month, setMonth] = useState(new Date())

  const [days, setDays] = useState<number[]>([])

  const monthAndYear = format(month, 'MMM yyyy', {
    locale: ptBR,
  })?.toUpperCase()

  function previousMonth() {
    setMonth((prevState) => subMonths(prevState, 1))
  }

  function nextMonth() {
    setMonth((prevState) => addMonths(prevState, 1))
  }

  useEffect(() => {
    const lastDayMonth = new Date(month.getFullYear(), month.getMonth(), 0)

    const daysArray = []

    const week: number[] = []

    for (let x = 1; x <= lastDayMonth.getDate(); x++) {
      const day = new Date(month.getFullYear(), month.getMonth(), x).getDay()
    }

    console.log('#######')
    console.log(daysArray)
  }, [month])

  return (
    <CalendarContainer>
      <Header>
        <ButtonMoveMonths onPress={previousMonth}>
          <CaretLeft />
        </ButtonMoveMonths>

        <Month>{monthAndYear}</Month>

        <ButtonMoveMonths onPress={nextMonth}>
          <CaretRight />
        </ButtonMoveMonths>
      </Header>

      <Weekdays>
        <Weekday>DOM</Weekday>
        <Weekday>SEG</Weekday>
        <Weekday>TER</Weekday>
        <Weekday>QUA</Weekday>
        <Weekday>QUI</Weekday>
        <Weekday>SEX</Weekday>
        <Weekday>SAB</Weekday>
      </Weekdays>
    </CalendarContainer>
  )
}
