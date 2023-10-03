"use client";

import { useRef } from "react";
import { postEntry } from "../lib/action";
// import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { SubmitButton } from "./SubmitButton";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Input } from "./ui/input";

export default function Search() {
  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();

  // const { pending } = useFormStatus();
  // console.log(pending);

  return (
    <form
      action={async (FormData) => {
        await postEntry(FormData);
        formRef.current?.reset();
      }}
      ref={formRef}
      className="relative flex items-center text-sm "
      // style={{ opacity: pending ? 0.7 : 1 }}
    >
      <Input placeholder="Search..." />

      {/* <SubmitButton /> */}
      <div>
        {pending ? (
          <button
            type="submit"
            disabled={true}
            className="loading loading-spinner loading-sm flex items-center justify-center absolute right-2 -mt-[14px] font-medium h-7 bg-green-500/30 text-neutral-900 dark:text-neutral-100 rounded-full "
          ></button>
        ) : (
          <button
            type="submit"
            disabled={false}
            className="flex items-center justify-center absolute right-2 -mt-[14px] font-medium h-7 bg-green-500/30 text-neutral-900 dark:text-neutral-100 rounded-full w-8 hover:bg-green-500/60 transition-colors duration-200"
          >
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
            </svg>
          </button>
        )}
      </div>
    </form>
  );
}
