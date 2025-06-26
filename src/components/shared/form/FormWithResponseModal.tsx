"use client";

import { useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import BaseButton from "../button/BaseButton";
import FormField from "../field/with-RHF/FormField";
import ResponseModal from "../modal/ResponseModal";
import { SomeData, SomeSchema } from "./SchemaExample";

const FormWithResponseModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const methods = useForm<SomeData>({
    resolver: zodResolver(SomeSchema),
    mode: "onSubmit", // change if need it
  });

  const { handleSubmit, reset } = methods;

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  const closeDialog = () => {
    dialogRef.current?.close();
    document.body.style.overflow = "";
  };

  const onSubmit = async (data: SomeData) => {
    console.log(`🚀 ~ onSubmit ~ data:`, data);
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsError(false);
      reset();
    } catch (err) {
      console.error("Error", err);
      setIsError(true);
    } finally {
      setIsLoading(false);
      openDialog();
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 flex flex-col gap-10">
            <FormField type="text" name="name" label="Name" />

            <FormField type="email" name="email" label="Email" />

            <FormField type="text" name="message" label="Message" />
          </div>

          {isLoading ? (
            <div className="flex-center h-[50px] lg:h-15">Loading...</div>
          ) : (
            <div className="flex items-center md:justify-center">
              <BaseButton type="submit" isLoading={isLoading}>
                відправити лист
              </BaseButton>
            </div>
          )}
        </form>
      </FormProvider>

      <ResponseModal
        dialogRef={dialogRef}
        onClose={closeDialog}
        isError={isError}
      />
    </>
  );
};

export default FormWithResponseModal;
