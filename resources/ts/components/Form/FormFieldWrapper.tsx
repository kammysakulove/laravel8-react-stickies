import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { FieldError } from "react-hook-form";
import { ReactNode } from "react";

export type FormFieldWrapperProps = {
  mb: number;
  label: string;
  error: FieldError | undefined;
  children: ReactNode;
};

export const FormFieldWrapper = (props: FormFieldWrapperProps) => {
  const { mb, label, error, children } = props;
  return (
    <FormControl mb={mb} isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>
      {children}
      <FormErrorMessage>{error && error.message}</FormErrorMessage>
    </FormControl>
  );
};
