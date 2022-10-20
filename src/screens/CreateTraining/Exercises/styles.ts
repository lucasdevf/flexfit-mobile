import styled, { css } from 'styled-components/native'

import { SafeAreaView } from 'react-native-safe-area-context'

export const CreateTrainingExercisesContainer = styled(SafeAreaView)`
  padding: 24px;
  flex: 1;

  background: white;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.MEDIUM};
  `}
`

export const ExercisesList = styled.View`
  flex: 1;
`
