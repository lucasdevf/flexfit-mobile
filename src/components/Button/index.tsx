import { TouchableOpacityProps } from 'react-native'
import { ButtonTypeStyleProps, ButtonContainer, Text } from './styles'

interface Props extends TouchableOpacityProps {
  title: string
  type?: ButtonTypeStyleProps
}

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
  return (
    <ButtonContainer type={type} {...rest}>
      <Text>{title}</Text>
    </ButtonContainer>
  )
}
