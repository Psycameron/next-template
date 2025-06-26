"use client";

import { useFormContext } from "react-hook-form";

interface FormFieldProps {
  name: string;
  label: string;
  type?: "text" | "tel" | "email" | "password";
  placeholder?: string;
}

const FormField = ({
  name,
  label,
  type = "text",
  placeholder = "",
}: FormFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors?.[name]?.message as string | undefined;
  const inputId = `input-${name}`;

  return (
    <div className="relative">
      <label
        htmlFor={inputId}
        className="mb-1 block text-sm font-medium text-zinc-900"
      >
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="w-full rounded border border-zinc-900 px-3 py-2 text-sm"
      />
      {fieldError && (
        <p className="absolute -bottom-[16px] left-0 text-xs text-red-500">
          {fieldError}
        </p>
      )}
    </div>
  );
};

export default FormField;
