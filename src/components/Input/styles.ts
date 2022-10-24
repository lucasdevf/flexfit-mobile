import styled, { css } from 'styled-components/native'

export const InputContainer = styled.View`
  align-items: flex-start;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

interface InputFieldProps {
  hasError: boolean
}

export const InputField = styled.TextInput<InputFieldProps>`
  border-radius: 8px;

  width: 100%;

  min-height: 56px;
  max-height: 56px;

  margin-top: 8px;
  padding: 16px;

  ${({ theme, hasError }) => css`
    border: 1px solid
      ${!hasError ? theme.COLORS.GRAY_200 : theme.COLORS.RED_500};
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.MEDIUM};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

export const Error = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.RED_500};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}

  margin-top: 4px;
`
