/* REACT */
import { useState } from 'react'

/* COMPONENTS */
import { Barbell } from 'phosphor-react-native'

/* COMPONENTS */
import { GoBackButton } from '../../components/GoBackButton'
import { Heading } from '../../components/Heading'
import { HeadingList } from '../../components/HeadingList'
import { Button } from '../../components/Button'

/* STYLES */
import { useTheme } from 'styled-components/native'
import { MyTrainingsContainer, Content, TrainingsList } from './styles'
import { Training, TrainingProps } from '../../components/Training'

export function MyTrainings() {
  const theme = useTheme()

  const [trainings, setTrainings] = useState<TrainingProps[]>([
    {
      name: 'Treino A',
      weekdays: [1, 2, 3, 4],
    },
    {
      name: 'Treino B',
      weekdays: [0, 1, 2, 3, 4, 5, 6],
    },
  ])

  return (
    <MyTrainingsContainer>
      <Content>
        <GoBackButton />

        <Heading
          icon={<Barbell size={32} color={theme.COLORS.PURPLE_500} />}
          title="Meus treinos"
          subtitle="Visualize e gerencie todos os seus treinos"
        />

        <HeadingList title="Treinos cadastrados" />

        <TrainingsList>
          {trainings.map((training) => (
            <Training key={training.name} data={training} />
          ))}
        </TrainingsList>
      </Content>

      <Button title="Criar treino" type="SECONDARY" />
    </MyTrainingsContainer>
  )
}
