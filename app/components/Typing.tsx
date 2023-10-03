"use client";
import Typewriter from "typewriter-effect";

export const Typing = () => {
  return (
    <div className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
      <Typewriter
        options={{
          strings: [
            "Hi, I am Reynaldi Satriawan Wikyanhadi",
            "I am Full Stack Developer",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};
