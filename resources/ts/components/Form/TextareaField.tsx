import { UseFormRegisterReturn } from 'react-hook-form';
import { Textarea, TextareaProps } from '@chakra-ui/react';
import { FormFieldWrapperProps, FormFieldWrapper } from './FormFieldWrapper';

type TextareaFieldProps = Omit<FormFieldWrapperProps, 'children'> &
  TextareaProps & {
    register: UseFormRegisterReturn;
  };

export const TextareaField = (props: TextareaFieldProps) => {
  const { register, label, error, ...inputProps } = props;

  return (
    <FormFieldWrapper label={label} error={error}>
      <Textarea {...register} {...inputProps} />
    </FormFieldWrapper>
  );
};
