"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  console.log(pending);

  return (
    <main>
      {pending ? (
        <button
          type="submit"
          disabled={true}
          className="loading loading-spinner loading-sm flex items-center justify-center absolute right-2 -mt-3 font-medium h-7 bg-green-500/30 text-neutral-900 dark:text-neutral-100 rounded "
        ></button>
      ) : (
        <button
          type="submit"
          disabled={false}
          className="flex items-center justify-center absolute right-2 -mt-3 font-medium h-7 bg-green-500/30 text-neutral-900 dark:text-neutral-100 rounded w-16"
        >
          Send
        </button>
      )}
    </main>
  );
}
