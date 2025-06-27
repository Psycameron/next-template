"use client";

import { useState } from "react";

import { cn } from "@/utils/cn";

import AccordionRow from "./AccordionRow";
import { AccordionItem } from "./type";

interface IAccordionProps {
  data: AccordionItem[];
  className?: string;
}

const Accordion = ({ data, className }: IAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <ul
      className={cn(
        "mx-auto flex w-full max-w-[700px] flex-col gap-10",
        className
      )}
    >
      {data.map((item, index) => (
        <li key={index}>
          <AccordionRow
            key={index}
            data={item as AccordionItem}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
