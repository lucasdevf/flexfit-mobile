import styled, { css } from 'styled-components/native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

interface Props {
  type: ButtonTypeStyleProps
}

export const ButtonContainer = styled.TouchableOpacity<Props>`
  width: 100%;

  min-height: 56px;
  max-height: 56px;

  border-radius: 8px;

  background-color: ${({ type }) =>
    type === 'PRIMARY'
      ? 'yellow'
      : 'linear-gradient(90deg, #5552FF 0%, rgba(85, 82, 255, 0.75) 101.68%)'};

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
