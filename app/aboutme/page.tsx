import Image from "next/image";
import { Tools } from "../components/Tools";
import Rey from "@/public/rey.png";

export default function AboutMe() {
  return (
    <div className="">
      <div className="divide-y divide-gray-500 dark:divide-gray-700">
        <div className="space-y-2 pt-5 pb-8 md:space-x-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
            About Me
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-x-0 lg:grid-cols-2">
          <div className="flex flex-col items-center pt-8 ">
            <Image
              src={Rey}
              alt="Picture of Rey"
              className="h-48 w-48 rounded-full object-cover border border-green-700"
            />
            <div className="divide-y divide-green-500 dark:divide-green-700">
              <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight dark:text-white ">
                Reynaldi Satriawan W.
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Full Stack Developer
              </p>
            </div>
          </div>
          <div className="prose text-center md:text-left prose-lg pt-8 pb-7 dark:prose-invert">
            <p>
              Hey everyone my name is Rey, I am 23 years old and i am Full Stack
              Developer based in Surabaya, Indonesia
            </p>
            <p>
              I love building Full Stack applications with React. When I
              discovered React, I was blown away by its interactivity and speed.
              Its virtual DOM dan efficient rendering mechanism alllowed me to
              create dynamic user interfaces that responded to user actions in
              real-time.
            </p>
            <p>
              I am thrilled to contionue this journey, honing my skills, and
              inspiring others in the process.
            </p>
          </div>
        </div>
      </div>
      <Tools />
    </div>
  );
}
