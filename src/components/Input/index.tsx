import { TextInputProps } from 'react-native'

import { Control, useController } from 'react-hook-form'

import { InputContainer, InputField, Label } from './styles'

interface Props extends TextInputProps {
  label: string
  name: string
  control: Control<any>
}

export function Input({ label, control, name, style, ...rest }: Props) {
  const { field } = useController({
    control,
    defaultValue: '',
    name,
  })

  return (
    <InputContainer style={style}>
      <Label>{label}</Label>

      <InputField {...rest} value={field.value} onChangeText={field.onChange} />
    </InputContainer>
  )
}
