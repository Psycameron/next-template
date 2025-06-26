import type { RefObject } from "react";

import BaseModal from "./BaseModal";

interface IResponseModalProps {
  onClose: () => void;
  dialogRef: RefObject<HTMLDialogElement | null>;
  isError: boolean;
}

const ResponseModal = ({
  dialogRef,
  onClose,
  isError,
}: IResponseModalProps) => {
  const title = isError ? "Error sending!" : "Success";
  const description = isError ? "Try again later" : "Thank you";

  return (
    <BaseModal dialogRef={dialogRef} onClose={onClose}>
      <div className="flex h-full flex-col items-center justify-between text-center">
        <p className="">{title}</p>
        <p className="">{description}</p>
      </div>
    </BaseModal>
  );
};

export default ResponseModal;
