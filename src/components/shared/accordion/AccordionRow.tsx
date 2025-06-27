"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/utils/cn";

import { MinusIcon, PlusIcon } from "../icons";
import { AccordionItem } from "./type";

interface AccordionRowProps {
  data: AccordionItem;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionRow = ({ data, isOpen, onClick }: AccordionRowProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  const { description, title } = data;

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  const buttonStyles = "absolute inset-0 transition-opacity duration-300";

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="font-micra flex w-full items-center justify-between text-left text-[20px] leading-[24px] uppercase xl:text-[24px] xl:tracking-[1px]"
      >
        {title}

        <div className="relative h-7 w-7">
          <PlusIcon
            className={cn(buttonStyles, isOpen ? "opacity-0" : "opacity-100")}
          />
          <MinusIcon
            className={cn(buttonStyles, isOpen ? "opacity-100" : "opacity-0")}
          />
        </div>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <p className="text-[13px] font-light xl:text-[14px]">{description}</p>
      </div>
    </>
  );
};

export default AccordionRow;
