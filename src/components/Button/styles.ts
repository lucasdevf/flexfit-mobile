import styled, { css } from 'styled-components/native'

import { LinearGradient as LinearGradientPrimitive } from 'expo-linear-gradient'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

interface Props {
  type: ButtonTypeStyleProps
}

export const ButtonContainer = styled.TouchableOpacity<Props>`
  width: 100%;
`

export const LinearGradient = styled(LinearGradientPrimitive)`
  width: 100%;

  min-height: 56px;
  max-height: 56px;

  border-radius: 8px;

  justify-content: center;
  align-items: center;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
  `}
`
