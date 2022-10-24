/* REACT */
import React, { useContext } from 'react'
import { FlatList } from 'react-native'

/* COMPONENTS */
import { Button } from '../../../components/Button'
import { Exercise } from '../../../components/Exercise'
import { HeaderGoBack } from '../../../components/HeaderGoBack'
import { HeadingList } from '../../../components/HeadingList'
import { ListEmpty } from '../../../components/ListEmpty'

/* STYLES */
import { CreateTrainingExercisesContainer, Label } from './styles'

/* NAVIGATION */
import { useNavigation } from '@react-navigation/native'

/* CONTEXT */
import { TrainingContext } from '../../../contexts/TrainingContext'

export function CreateTrainingExercises() {
  const { training } = useContext(TrainingContext)

  const steps = ['weekdays', 'exercises', 'name']

  const navigation = useNavigation()

  const hasExercises = training.exercises?.length > 0

  return (
    <CreateTrainingExercisesContainer>
      <HeaderGoBack
        steps={{
          steps,
          indexActive: 1,
        }}
      />

      <Label>Exercícios</Label>

      <Button
        title="Adicionar exercício"
        type="SECONDARY"
        onPress={() => navigation.navigate('addExercise')}
        style={{
          marginTop: 28,
        }}
      />

      {hasExercises && <HeadingList title="Exercícios adicionados" />}

      <FlatList
        data={training.exercises}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Exercise data={item} />}
        ListEmptyComponent={
          <ListEmpty message="Nenhum exercício cadastrado ainda." />
        }
        contentContainerStyle={{ flex: 1 }}
      />

      {hasExercises && (
        <Button
          title="Continuar"
          onPress={() => navigation.navigate('createTrainingName')}
        />
      )}
    </CreateTrainingExercisesContainer>
  )
}
