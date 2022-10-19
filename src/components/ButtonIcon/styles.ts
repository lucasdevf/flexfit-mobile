import styled, { css } from 'styled-components/native'

export const ButtonIconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`

export const Icon = styled.View`
  background: ${({ theme }) => theme.COLORS.GRAY_100};

  align-items: center;
  justify-content: center;

  border-radius: 999px;
  width: 54px;
  height: 54px;
`

export const Text = styled.Text`
  margin-top: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
