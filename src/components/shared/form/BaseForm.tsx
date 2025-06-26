"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import BaseButton from "../button/BaseButton";
import FormField from "../field/with-RHF/FormField";
import { SomeData, SomeSchema } from "./SchemaExample";

const BaseForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<SomeData>({
    resolver: zodResolver(SomeSchema),
    mode: "onSubmit", // change if need it
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: SomeData) => {
    setIsLoading(true);
    // Do something with data
    console.log(data);

    reset();

    setIsLoading(false);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          className="mx-auto flex w-[400px] flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 flex flex-col gap-6">
            <FormField type="text" name="name" label="Name" />

            <FormField type="email" name="email" label="Email" />

            <FormField type="text" name="message" label="Message" />
          </div>

          <div className="flex items-center md:justify-center">
            <BaseButton type="submit" isLoading={isLoading}>
              Send
            </BaseButton>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default BaseForm;
