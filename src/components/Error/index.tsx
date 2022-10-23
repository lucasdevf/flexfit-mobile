/* ICONS */
import { AntDesign } from '@expo/vector-icons'
import { ViewProps } from 'react-native'
import { useTheme } from 'styled-components'

/* STYLES */
import { ErrorContainer, Text } from './styles'

interface Props extends ViewProps {
  error: string
}

export function Error({ error, ...rest }: Props) {
  const theme = useTheme()

  return (
    <ErrorContainer {...rest}>
      <AntDesign
        name="exclamationcircleo"
        color={theme.COLORS.RED_500}
        size={20}
      />

      <Text>{error}</Text>
    </ErrorContainer>
  )
}
