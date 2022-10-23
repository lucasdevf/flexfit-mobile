import { ActivityIndicator, TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components'
import {
  ButtonTypeStyleProps,
  ButtonContainer,
  LinearGradient,
  Text,
} from './styles'

interface Props extends TouchableOpacityProps {
  title: string
  type?: ButtonTypeStyleProps
  isLoading?: boolean
}

export function Button({ title, type = 'PRIMARY', isLoading, ...rest }: Props) {
  const { COLORS } = useTheme()

  function linearGradientColors() {
    if (type === 'SECONDARY') {
      return ['rgba(85,82, 255, 100)', 'rgba(85,82, 255, 75)']
    } else if (type === 'GRAY_LIGHT') {
      return ['#f8f8f8', '#f8f8f8']
    }

    return ['#EE9D00', '#F1B030']
  }

  const colorsTextButton = {
    PRIMARY: COLORS.WHITE,
    SECONDARY: COLORS.WHITE,
    GRAY_LIGHT: COLORS.GRAY_700,
  }

  return (
    <ButtonContainer
      type={type}
      {...rest}
      disabled={rest.disabled ?? isLoading}
    >
      <LinearGradient
        colors={linearGradientColors()}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
      >
        {isLoading ? (
          <ActivityIndicator color={colorsTextButton[type]} size={20} />
        ) : (
          <Text color={colorsTextButton[type]}>{title}</Text>
        )}
      </LinearGradient>
    </ButtonContainer>
  )
}
