import { X } from 'phosphor-react-native'
import { TouchableOpacityProps } from 'react-native'

/* STYLES */
import { useTheme } from 'styled-components/native'
import { ButtonCloseContainer } from './styles'

export function ButtonClose(props: TouchableOpacityProps) {
  const { COLORS } = useTheme()

  return (
    <ButtonCloseContainer {...props}>
      <X size={28} color={COLORS.GRAY_500} />
    </ButtonCloseContainer>
  )
}
