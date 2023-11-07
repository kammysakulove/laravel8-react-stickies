import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { FieldError } from "react-hook-form";
import { ReactNode } from "react";

export type FormFieldWrapperProps = {
  label: string;
  error: FieldError | undefined;
  children: ReactNode;
};

export const FormFieldWrapper = (props: FormFieldWrapperProps) => {
  const { label, error, children } = props;
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>
      {children}
      <FormErrorMessage>{error && error.message}</FormErrorMessage>
    </FormControl>
  );
};
