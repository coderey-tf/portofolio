"use client";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  x: string;
  y: string;
}

const Skill = ({ name, x, y }: Skill) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-gray-900 text-white py-3 px-6 shadow-gray-900 cursor-pointer absolute dark:text-gray-900 dark:bg-white dark:shadow-gray-100"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.0 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
export const Skills = () => {
  return (
    <div className="">
      <h2 className="font-bold text-8xl mt-64 mb-4 w-full text-center dark:text-gray-100">
        Skills
      </h2>
      <div className="w-full h-96 lg:h-screen text-xs lg:text-base flex items-center justify-center rounded-[50px] lg:rounded-[250px] bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-gray-900 text-white py-3 px-6 shadow-gray-900 cursor-pointer dark:text-gray-900 dark:bg-white dark:shadow-gray-100"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.0 }}
        >
          Web
        </motion.div>

        <Skill name="ReactJS" x="-2vw" y="-22vw" />
        <Skill name="NextJS" x="-13vw" y="-15vw" />
        <Skill name="Tailwind CSS" x="2vw" y="-13vw" />
        <Skill name="Bootstrap" x="15vw" y="-15vw" />
        <Skill name="VueJS" x="28vw" y="-10vw" />

        <Skill name="HTML" x="13vw" y="2vw" />
        <Skill name="CSS" x="-1vw" y="-8vw" />
        <Skill name="Javascript" x="-12vw" y="-2vw" />
        <Skill name="Typescript" x="-23vw" y="-7vw" />
        <Skill name="GIT" x="16vw" y="-7vw" />
        <Skill name="PHP" x="-2vw" y="9vw" />

        <Skill name="Laravel" x="13vw" y="10vw" />
        <Skill name="GCP" x="-31vw" y="3vw" />
        <Skill name="Sanity" x="-11vw" y="16vw" />
        <Skill name="NodeJS" x="-16vw" y="7vw" />
        <Skill name="Prisma" x="25vw" y="5vw" />
        <Skill name="SQL" x="13vw" y="10vw" />
        <Skill name="REST" x="9vw" y="16vw" />
      </div>
    </div>
  );
};
