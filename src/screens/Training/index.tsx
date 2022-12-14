/* REACT */
import { StatusBar } from 'react-native'

/* NAVIGATION */
import { useNavigation } from '@react-navigation/native'

/* ICONS */
import { Barbell, Calendar } from 'phosphor-react-native'

/* STYLES */
import { useTheme } from 'styled-components/native'
import { TrainingContainer, Options } from './styles'

/* COMPONENTS */
import { Heading } from '../../components/Heading'
import { ButtonOptionScreen } from '../../components/ButtonOptionScreen'

export function Training() {
  const { COLORS } = useTheme()

  const navigation = useNavigation()

  return (
    <TrainingContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <Heading title="Área do treino" />

      <Options>
        <ButtonOptionScreen
          title="Meus treinos"
          icon={<Barbell color={COLORS.PURPLE_500} />}
          style={{ marginBottom: 28 }}
          onPress={() => navigation.navigate('myTrainings')}
        />
        <ButtonOptionScreen
          title="Calendário"
          icon={<Calendar color={COLORS.PURPLE_500} />}
          onPress={() => navigation.navigate('calendar')}
        />
      </Options>
    </TrainingContainer>
  )
}
