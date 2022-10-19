import { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { ButtonIconContainer, Icon, Text } from './styles'

interface Props extends TouchableOpacityProps {
  title: string
  icon: ReactNode
}

export function ButtonIcon({ title, icon, ...rest }: Props) {
  return (
    <ButtonIconContainer {...rest}>
      <Icon>{icon}</Icon>

      <Text>{title}</Text>
    </ButtonIconContainer>
  )
}
