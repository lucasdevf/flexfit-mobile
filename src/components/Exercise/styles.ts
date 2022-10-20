import styled, { css } from 'styled-components/native'

export const ExerciseContainer = styled.View`
  flex-direction: row;
  align-items: center;

  padding-bottom: 28px;
`

export const Content = styled.View`
  flex: 1;

  flex-direction: row;
  align-items: center;
`

export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
  `}
`

export const Details = styled.Text`
  margin-left: 4px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_500};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
