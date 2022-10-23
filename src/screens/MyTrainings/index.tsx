/* REACT */
import { FlatList } from 'react-native'

/* COMPONENTS */
import { Barbell } from 'phosphor-react-native'

/* COMPONENTS */
import { HeaderGoBack } from '../../components/HeaderGoBack'
import { Heading } from '../../components/Heading'
import { HeadingList } from '../../components/HeadingList'
import { Button } from '../../components/Button'

/* NAVIGATION */
import { useNavigation } from '@react-navigation/native'

/* STYLES */
import { useTheme } from 'styled-components/native'
import { MyTrainingsContainer, Content } from './styles'
import { Training, TrainingProps } from '../../components/Training'
import { ListEmpty } from '../../components/ListEmpty'
import { useQuery } from 'react-query'
import { api } from '../../services/api'
import { Error } from '../../components/Error'

export function MyTrainings() {
  const theme = useTheme()

  const navigation = useNavigation()

  const { data: trainings, error } = useQuery<TrainingProps[]>(
    '@trainings/my-trainings',
    fetchTrainings,
    {
      retry: false,
    },
  )

  async function fetchTrainings() {
    const response = await api.get('/trainings')

    return response.data
  }

  return (
    <MyTrainingsContainer>
      <Content>
        <HeaderGoBack />

        <Heading
          icon={<Barbell size={32} color={theme.COLORS.PURPLE_500} />}
          title="Meus treinos"
          subtitle="Visualize e gerencie todos os seus treinos"
        />

        {trainings?.length > 0 && <HeadingList title="Treinos cadastrados" />}

        {error && <Error error={String(error)} />}

        <FlatList
          data={trainings}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Training data={item} />}
          ListEmptyComponent={
            <ListEmpty message="Nenhum treino cadastrado ainda." />
          }
          contentContainerStyle={{ flex: 1 }}
        />
      </Content>

      <Button
        title="Criar treino"
        type="SECONDARY"
        onPress={() => navigation.navigate('createTrainingWeekdays')}
      />
    </MyTrainingsContainer>
  )
}
