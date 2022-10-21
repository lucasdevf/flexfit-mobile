/* COMPONENTS */
import { Button } from '../../../components/Button'
import { ExerciseProps, Exercise } from '../../../components/Exercise'
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

export function CreateTrainingExercises() {
  const steps = ['weekdays', 'exercises', 'name']

  const navigation = useNavigation()

  const exercises: ExerciseProps[] = [
    {
      name: 'Supino reto',
      series: 4,
      repetitions: 10,
    },
    {
      name: 'Rosca direta',
      series: 4,
      repetitions: 10,
    },
  ]

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
        {exercises.map((exercise) => (
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
