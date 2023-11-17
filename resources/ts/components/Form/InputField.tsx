import { UseFormRegisterReturn } from 'react-hook-form'
import { Input, InputProps } from '@chakra-ui/react'
import { FormFieldWrapperProps, FormFieldWrapper } from './FormFieldWrapper'

type InputFieldProps = Omit<FormFieldWrapperProps, 'children'> &
  InputProps & {
    register: UseFormRegisterReturn
  }

export const InputField = (props: InputFieldProps) => {
  const { register, label, error, ...inputProps } = props

  return (
    <FormFieldWrapper label={label} error={error}>
      <Input {...register} {...inputProps} />
    </FormFieldWrapper>
  )
}
