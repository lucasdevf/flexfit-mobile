import { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { ButtonOptionScreenContainer, Text } from './styles'

interface Props extends TouchableOpacityProps {
  title: string
  icon: ReactNode
}

export function ButtonOptionScreen({ title, icon, ...rest }: Props) {
  return (
    <ButtonOptionScreenContainer {...rest}>
      {icon}

      <Text>{title}</Text>
    </ButtonOptionScreenContainer>
  )
}
