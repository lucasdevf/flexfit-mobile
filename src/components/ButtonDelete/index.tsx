/* ICONS */
import { Trash } from 'phosphor-react-native'

/* STYLES */
import { useTheme } from 'styled-components/native'
import { ButtonDeleteContainer } from './styles'

interface Props {
  onDelete: () => void
}

export function ButtonDelete({ onDelete }: Props) {
  const theme = useTheme()

  return (
    <ButtonDeleteContainer onPress={onDelete}>
      <Trash size={24} color={theme.COLORS.RED_500} />
    </ButtonDeleteContainer>
  )
}
