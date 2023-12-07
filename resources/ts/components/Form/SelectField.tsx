import { UseFormRegisterReturn } from 'react-hook-form';
import { Select, SelectProps } from '@chakra-ui/react';
import { FormFieldWrapperProps, FormFieldWrapper } from './FormFieldWrapper';

export type Option = {
  value: number | string;
  label: string;
};

type SelectFieldProps = Omit<FormFieldWrapperProps, 'children'> &
  SelectProps & {
    options: Option[];
    register: UseFormRegisterReturn;
  };

export const SelectField = ({ register, label, error, options, ...inputProps }: SelectFieldProps) => {
  return (
    <FormFieldWrapper label={label} error={error}>
      <Select {...register} {...inputProps}>
        {options?.map((option: Option) => {
          return (
            <option key={option.value + option.label} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Select>
    </FormFieldWrapper>
  );
};
