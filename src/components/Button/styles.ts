import styled, { css } from 'styled-components/native'

import { LinearGradient as LinearGradientPrimitive } from 'expo-linear-gradient'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'GRAY_LIGHT'

interface Props {
  type: ButtonTypeStyleProps
  disabled: boolean
}

export const ButtonContainer = styled.TouchableOpacity<Props>`
  width: 100%;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
    `}
`

export const LinearGradient = styled(LinearGradientPrimitive)`
  width: 100%;

  min-height: 56px;
  max-height: 56px;

  border-radius: 8px;

  justify-content: center;
  align-items: center;
`

interface TextProps {
  color: string
}

export const Text = styled.Text<TextProps>`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
  `}

  color: ${(props) => props.color};
`
