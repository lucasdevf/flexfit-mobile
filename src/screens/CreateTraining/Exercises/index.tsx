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

export function CreateTrainingExercises() {
  const steps = ['weekdays', 'exercises', 'name']

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
    </CreateTrainingExercisesContainer>
  )
}
