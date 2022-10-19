import { CaretLeft } from 'phosphor-react-native'

/* NAVIGATION */
import { useNavigation } from '@react-navigation/native'

/* STYLES */
import { useTheme } from 'styled-components/native'
import { GoBackButtonContainer } from './styles'

export function GoBackButton() {
  const { COLORS } = useTheme()

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <GoBackButtonContainer onPress={handleGoBack}>
      <CaretLeft size={28} color={COLORS.GRAY_500} weight="bold" />
    </GoBackButtonContainer>
  )
}
