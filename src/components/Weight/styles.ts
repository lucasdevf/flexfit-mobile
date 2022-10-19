import { LinearGradient as LinearGradientPrimitive } from 'expo-linear-gradient'
import styled, { css } from 'styled-components/native'

export const LinearGradient = styled(LinearGradientPrimitive)`
  height: 164px;
  width: 164px;

  align-items: center;
  justify-content: center;
  border-radius: 999px;
`

export const WeightContainer = styled.View`
  height: 159px;
  width: 159px;

  align-items: center;
  justify-content: center;

  background: white;
  border-radius: 999px;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const Label = styled.Text`
  margin-top: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_500};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
