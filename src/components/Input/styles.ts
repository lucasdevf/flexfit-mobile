import styled, { css } from 'styled-components/native'

export const InputContainer = styled.View`
  display: flex;
  align-items: flex-start;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const InputField = styled.TextInput`
  border-radius: 8px;

  width: 100%;

  min-height: 56px;
  max-height: 56px;

  margin-top: 8px;
  padding: 16px;

  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_200};
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.MEDIUM};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
