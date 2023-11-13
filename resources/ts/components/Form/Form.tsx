import { ComponentProps, ReactNode } from "react";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";

type FormProps<
  TValues extends FieldValues,
  TSchema extends ZodSchema<TValues>,
> = {
  onSubmit: SubmitHandler<TValues>;
  schema: TSchema;
  children: (methods: UseFormReturn<TValues>) => ReactNode;
} & Omit<ComponentProps<"form">, "onSubmit" | "children">;

export const Form = <
  TValues extends FieldValues,
  TSchema extends ZodSchema<TValues>,
>({
  onSubmit,
  schema,
  children,
}: FormProps<TValues, TSchema>) => {
  const methods = useForm<TValues>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};
