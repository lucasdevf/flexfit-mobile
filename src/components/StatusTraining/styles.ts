import styled, { css } from 'styled-components/native'

export const StatusTrainingContainer = styled.View`
  margin-bottom: 48px;
  width: 100%;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background: ${theme.COLORS.GRAY_100};
    border: 1px solid ${theme.COLORS.GRAY_200};

    padding: 16px;
    border-radius: 8px;
  `}
`

export const Text = styled.Text``
