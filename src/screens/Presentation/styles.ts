import styled, { css } from 'styled-components/native'

import { SafeAreaView } from 'react-native-safe-area-context'

export const PresentationContainer = styled(SafeAreaView)`
  align-items: center;
  justify-content: center;
  flex: 1;

  background: ${({ theme }) => theme.COLORS.YELLOW_500};
  padding: 24px;
`

export const Content = styled.View`
  margin-bottom: 56px;
`

export const Title = styled.Text`
  margin-bottom: 20px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`

export const Description = styled.Text`
  text-align: justify;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.MEDIUM};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const SignInButton = styled.TouchableOpacity`
  margin-top: 40px;

  min-height: 36px;
  max-height: 36px;

  align-items: center;
  justify-content: center;
`

export const TextSignInButton = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
  `}
`
