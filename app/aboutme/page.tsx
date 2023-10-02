import { Skills } from "../components/Skills";

export default function AboutMe() {
  return (
    <div>
      <div className="divide-y divide-gray-500 dark:divide-gray-700">
        <div className="space-y-2 pt-5 pb-8 md:space-x-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
            About Me
          </h1>
        </div>
      </div>
      <Skills />
    </div>
  );
}
