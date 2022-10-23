import styled, { css } from 'styled-components/native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { Input as InputPrimitive } from '../../components/Input'
import { Button as ButtonPrimitive } from '../../components/Button'

export const SignInContainer = styled(SafeAreaView)`
  padding: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
  background: white;
`

export const Form = styled.View`
  margin-top: 48px;
  width: 100%;
`

export const ForgotPassword = styled.TouchableOpacity`
  align-items: flex-end;
  margin-top: 20px;
`

export const ForgotPasswordText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_500};
  `}
`

export const Input = styled(InputPrimitive)`
  margin-top: 24px;
`

export const Button = styled(ButtonPrimitive)`
  margin-top: 36px;
`
