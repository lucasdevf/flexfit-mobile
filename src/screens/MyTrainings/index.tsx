/* COMPONENTS */
import { Barbell } from 'phosphor-react-native'

/* COMPONENTS */
import { GoBackButton } from '../../components/GoBackButton'
import { Heading } from '../../components/Heading'
import { HeadingList } from '../../components/HeadingList'

/* STYLES */
import { useTheme } from 'styled-components/native'
import { MyTrainingsContainer } from './styles'

export function MyTrainings() {
  const theme = useTheme()

  return (
    <MyTrainingsContainer>
      <GoBackButton />

      <Heading
        icon={<Barbell size={32} color={theme.COLORS.PURPLE_500} />}
        title="Meus treinos"
        subtitle="Visualize e gerencie todos os seus treinos"
      />

      <HeadingList title="Treinos cadastrados" />
    </MyTrainingsContainer>
  )
}
