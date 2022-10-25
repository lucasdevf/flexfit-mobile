import { TextInputProps } from 'react-native'

import { Control, useController } from 'react-hook-form'

import { Error, InputContainer, InputField, Label } from './styles'

interface Props extends TextInputProps {
  label: string
  name: string
  control: Control<any>
  errors?: any
  defaultValue?: string
}

export function Input({
  label,
  control,
  name,
  style,
  errors,
  defaultValue,
  ...rest
}: Props) {
  const { field } = useController({
    control,
    defaultValue: defaultValue ?? '',
    name,
  })

  const error = errors && errors[name]?.message

  return (
    <InputContainer style={style}>
      <Label>{label}</Label>

      <InputField
        {...rest}
        value={field.value}
        onChangeText={field.onChange}
        hasError={!!error}
      />

      {error && <Error>{error}</Error>}
    </InputContainer>
  )
}
