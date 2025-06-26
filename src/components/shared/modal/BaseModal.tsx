"use client";

import { ReactNode, RefObject, useEffect } from "react";

import { cn } from "@/utils/cn";

interface IBaseModalProps {
  onClose: () => void;
  dialogRef: RefObject<HTMLDialogElement | null>;
  children: ReactNode;
  modalClassName?: string;
  backdropClassName?: string;
}

const BaseModal = ({
  dialogRef,
  onClose,
  children,
  modalClassName = "",
  backdropClassName = "",
}: IBaseModalProps) => {
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog?.addEventListener("close", onClose);
    return () => {
      dialog?.removeEventListener("close", onClose);
    };
  }, [dialogRef, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const rect = dialog.getBoundingClientRect();
    const clickX = e.clientX;
    const clickY = e.clientY;

    const isInDialog =
      clickX >= rect.left &&
      clickX <= rect.right &&
      clickY >= rect.top &&
      clickY <= rect.bottom;

    if (!isInDialog) {
      dialog.close();
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      aria-labelledby="modal-title"
      className={cn("rounded-lg backdrop:bg-black/50", backdropClassName)}
    >
      <div
        className={cn(
          "bg-light relative w-full max-w-[350px] rounded-lg px-6 py-10 md:max-w-[511px] md:px-[68px] md:py-12",
          modalClassName
        )}
      >
        {/* Need to add id="modal-title" on modal title */}
        {children}
      </div>
    </dialog>
  );
};

export default BaseModal;
