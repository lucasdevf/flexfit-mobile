import styled from 'styled-components/native'

export const ErrorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.RED_100};
  border-radius: 8px;
`

export const Text = styled.Text`
  margin-left: 16px;
  color: ${({ theme }) => theme.COLORS.RED_500};
`
