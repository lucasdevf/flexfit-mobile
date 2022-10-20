import styled, { css } from 'styled-components/native'

export const CheckboxContainer = styled.TouchableHighlight`
  flex-direction: row;
  align-items: center;
`

export const Check = styled.View`
  height: 24px;
  width: 24px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;

  margin-right: 8px;
  align-items: center;
  justify-content: center;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `}
`
