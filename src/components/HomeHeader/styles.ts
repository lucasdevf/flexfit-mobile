import styled, { css } from 'styled-components/native'

export const HomeHeaderContainer = styled.View`
  height: 64px;
`

export const Content = styled.View`
  width: 100%;
  height: 100%;

  flex-direction: row;
  align-items: center;

  justify-content: space-between;
  padding: 0 24px;
`

export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`
