import styled, { css } from 'styled-components/native'

export const HeadingContainer = styled.View``

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
  `}
`
