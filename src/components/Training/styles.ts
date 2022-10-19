import styled, { css } from 'styled-components/native'

export const TrainingContainer = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 12px 0;
`

export const Content = styled.View`
  flex-direction: column;
  flex: 1;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
  `}

  margin-bottom: 8px;
`

export const Weekdays = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_500};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
