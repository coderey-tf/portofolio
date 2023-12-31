"use client";

import { useRef } from "react";
import { postEntry } from "../lib/action";
// import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { SubmitButton } from "./SubmitButton";

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  // const { pending } = useFormStatus();
  // console.log(pending);

  return (
    <form
      action={async (FormData) => {
        await postEntry(FormData);
        formRef.current?.reset();
      }}
      ref={formRef}
      className="relative flex items-center text-sm mb-5"
      // style={{ opacity: pending ? 0.7 : 1 }}
    >
      <input
        type="text"
        placeholder="Your message..."
        name="entry"
        required
        // disabled={pending}
        className="pl-4 pr-32 py-2 mt-1 focus:ring-green-500 focus:border-green-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
      />

      <SubmitButton />
    </form>
  );
}
