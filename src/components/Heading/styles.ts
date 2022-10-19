import styled, { css } from 'styled-components/native'

export const HeadingContainer = styled.View``

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}

  margin-top: 6px;
`
