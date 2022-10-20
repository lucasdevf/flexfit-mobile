/* ICONS */
import { Check as CheckIcon } from 'phosphor-react-native'

/* STYLES */
import { useTheme } from 'styled-components/native'
import { Check, CheckboxContainer, Label } from './styles'

interface Props {
  label: string
  checked: boolean
  onCheck: () => void
  style?: any
}

export function Checkbox({ label, checked, onCheck, style }: Props) {
  const { COLORS } = useTheme()

  return (
    <CheckboxContainer
      style={style}
      onPress={onCheck}
      underlayColor="transparent"
    >
      <>
        <Check>
          {checked && (
            <CheckIcon size={16} color={COLORS.PURPLE_500} weight="bold" />
          )}
        </Check>

        <Label>{label}</Label>
      </>
    </CheckboxContainer>
  )
}
