/* COMPONENTS */
import { Button } from '../../../components/Button'
import { Exercise } from '../../../components/Exercise'
import { HeaderGoBack } from '../../../components/HeaderGoBack'
import { HeadingList } from '../../../components/HeadingList'

/* STYLES */
import {
  CreateTrainingExercisesContainer,
  Label,
  ExercisesList,
} from './styles'

/* NAVIGATION */
import { useNavigation } from '@react-navigation/native'
import { useContext } from 'react'
import { TrainingContext } from '../../../contexts/TrainingContext'

export function CreateTrainingExercises() {
  const { training } = useContext(TrainingContext)

  const steps = ['weekdays', 'exercises', 'name']

  const navigation = useNavigation()

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

      <HeadingList title="Exercícios adicionados" />

      <ExercisesList>
        {training.exercises?.map((exercise) => (
          <Exercise key={exercise.name} data={exercise} />
        ))}
      </ExercisesList>

      <Button
        title="Continuar"
        onPress={() => navigation.navigate('createTrainingName')}
      />
    </CreateTrainingExercisesContainer>
  )
}
