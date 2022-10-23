/* LIBS */
import { CalendarBlank } from 'phosphor-react-native'

/* COMPONENTS */
import { HeaderGoBack } from '../../components/HeaderGoBack'
import { Heading } from '../../components/Heading'
import { Calendar as CalendarComponent } from '../../components/Calendar'

/* STYLES */
import { CalendarContainer, Content } from './styles'
import { useTheme } from 'styled-components/native'

export function Calendar() {
  const { COLORS } = useTheme()

  return (
    <CalendarContainer>
      <HeaderGoBack />

      <Heading
        icon={<CalendarBlank size={32} color={COLORS.PURPLE_500} />}
        title="Calendário"
        subtitle="Marque quais dias você foi na academia, quais você faltou e muito mais"
      />

      <Content>
        <CalendarComponent />
      </Content>
    </CalendarContainer>
  )
}
