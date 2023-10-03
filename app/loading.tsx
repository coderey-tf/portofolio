export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <p className="text-xl text-black dark:text-white flex flex-col justify-center items-center h-full absolute inset-0">
      <span className="loading loading-spinner loading-md"></span>
      <span>Loading </span>
    </p>
  );
}
