import styled, { css } from 'styled-components/native'

export const HomeHeaderContainer = styled.View``

export const Content = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  justify-content: space-between;
  padding: 0 24px;

  padding-top: 12px;
  padding-bottom: 36px;
`

export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`
