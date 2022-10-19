import styled, { css } from 'styled-components/native'

export const ButtonOptionScreenContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 16px;

  background: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 8px;
`

export const Text = styled.Text`
  margin-left: 12px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.MEDIUM};
  `}
`
