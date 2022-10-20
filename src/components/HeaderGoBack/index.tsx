import { CaretLeft } from 'phosphor-react-native'

/* NAVIGATION */
import { useNavigation } from '@react-navigation/native'

/* STYLES */
import { useTheme } from 'styled-components/native'
import { HeaderGoBackContainer, GoBackButton } from './styles'
import { StepsIndicator, StepsIndicatorProps } from '../StepsIndicator'

interface Props {
  steps?: StepsIndicatorProps
}

export function HeaderGoBack({ steps }: Props) {
  const { COLORS } = useTheme()

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <HeaderGoBackContainer>
      <GoBackButton onPress={handleGoBack}>
        <CaretLeft size={28} color={COLORS.GRAY_500} weight="bold" />
      </GoBackButton>

      {steps && (
        <StepsIndicator steps={steps.steps} indexActive={steps.indexActive} />
      )}
    </HeaderGoBackContainer>
  )
}
