import { UseFormRegisterReturn } from "react-hook-form";
import { Input } from "@chakra-ui/react";
import { FormFieldWrapperProps, FormFieldWrapper } from "./FormFieldWrapper";

type InputFieldProps = Omit<FormFieldWrapperProps, "children"> & {
  type: string;
  placeholder?: string;
  className?: string;
  register: UseFormRegisterReturn;
};

export const InputField = (props: InputFieldProps) => {
  const { type, placeholder, className, register, mb, label, error } = props;

  return (
    <FormFieldWrapper mb={mb} label={label} error={error}>
      <Input
        {...register}
        className={className}
        placeholder={placeholder}
        variant="outline"
        type={type}
      />
    </FormFieldWrapper>
  );
};
