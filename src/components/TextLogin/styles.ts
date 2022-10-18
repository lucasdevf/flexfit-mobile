import styled, { css } from 'styled-components/native'

export const TextLoginContainer = styled.View`
  flex-direction: row;
  margin-top: 44px;
`

export const Text = styled.Text`
  margin-right: 4px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_500};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.MEDIUM};
  `}
`

export const Button = styled.TouchableOpacity``

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.PURPLE_500};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.MEDIUM};
  `}
`
