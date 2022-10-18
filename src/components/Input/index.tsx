import { TextInputProps } from 'react-native'
import { InputContainer, InputField, Label } from './styles'

interface Props extends TextInputProps {
  label: string
}

export function Input({ label, style, ...rest }: Props) {
  return (
    <InputContainer style={style}>
      <Label>{label}</Label>

      <InputField {...rest} />
    </InputContainer>
  )
}
