import { TrainingProps } from '../components/Training'

/* eslint-disable */
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      presentation: undefined
      signIn: undefined
      appBottomTabs: undefined
      myTrainings: undefined
      createTrainingWeekdays: undefined
      createTrainingExercises: undefined
      addExercise: undefined
      createTrainingName: undefined
      calendar: undefined
      deleteTraining: {
        training: TrainingProps
      }
      measurements: undefined
    }
  }
}