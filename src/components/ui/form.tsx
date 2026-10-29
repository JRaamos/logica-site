import * as React from "react";
import {
  FormProvider,
  Controller,
  useFormContext,
  type ControllerProps,
  type FieldValues,
  type FieldPath,
} from "react-hook-form";
export const Form = FormProvider;
export function FormField<T extends FieldValues, N extends FieldPath<T>>(
  props: ControllerProps<T, N>,
) {
  return <Controller {...props} />;
}
export function FormItem({
  children,
  className = "",
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={`form-item ${className}`} {...props}>
      {children}
    </div>
  );
}
export function FormLabel(props: React.ComponentProps<"label">) {
  return <label className="form-label" {...props} />;
}
export function FormMessage({ name }: { name: string }) {
  const {
    formState: { errors },
  } = useFormContext();
  const message = errors[name]?.message;
  return message ? (
    <p role="alert" id={`${name}-error`} className="form-error">
      {String(message)}
    </p>
  ) : null;
}
