import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const CreateTrainingWeekdaysContainer = styled(SafeAreaView)`
  padding: 24px;
  flex: 1;

  position: relative;
  background: white;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.MEDIUM};
  `}

  line-height: 24px;
`

export const Weekdays = styled.View`
  margin-top: 28px;

  flex: 1;
`
