import { TouchableOpacityProps } from 'react-native'
import {
  ButtonTypeStyleProps,
  ButtonContainer,
  LinearGradient,
  Text,
} from './styles'

interface Props extends TouchableOpacityProps {
  title: string
  type?: ButtonTypeStyleProps
}

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
  function linearGradientColors() {
    if (type === 'SECONDARY') {
      return ['rgba(85,82, 255, 100)', 'rgba(85,82, 255, 75)']
    } else {
      return ['#EE9D00', '#F1B030']
    }
  }

  return (
    <ButtonContainer type={type} {...rest}>
      <LinearGradient
        colors={linearGradientColors()}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
      >
        <Text>{title}</Text>
      </LinearGradient>
    </ButtonContainer>
  )
}
