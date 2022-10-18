import styled, { css } from 'styled-components/native'

export const ButtonSignInWithGoogleContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  width: 100%;

  min-height: 56px;
  max-height: 56px;

  border-radius: 8px;

  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};

  margin-top: 24px;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
  `}

  margin-left: 16px;
`
