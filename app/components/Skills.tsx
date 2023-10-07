"use client";
import { motion } from "framer-motion";
import Icon from "./Icon";

interface Skill {
  name: string;
  x: string;
  y: string;
  color: string;
}

const skillMobile = [
  "React JS",
  "Vue JS",
  "GCP",
  "Typescript",
  "Tailwind CSS",
  "Sanity",
  "Bootstrap",
  "Next JS",
  "Laravel",
  "Node JS",
  "Prisma",
  "MySQL",
  "PostgreSQL",
];

const Skill = ({ name, x, y, color }: Skill) => {
  return (
    <motion.div
      className={`md:flex items-center justify-center rounded-full font-semibold py-2 px-3 shadow-gray-900 cursor-pointer absolute  dark:shadow-gray-100 md:py-3 md:px-6 hidden ${color}`}
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
      <h2 className="font-extrabold text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-6xl mt-64 mb-8 md:mb-4 w-full text-center dark:text-gray-100">
        Skills
      </h2>
      <div className="w-full h-96 lg:h-screen text-base md:text-[10px] lg:text-base md:flex items-center justify-center md:rounded-[50px] lg:rounded-[250px] md:bg-circularLight md:dark:bg-circularDark">
        <motion.div
          className="md:flex items-center justify-center rounded-full font-semibold py-2 px-3 bg-gray-900 text-white shadow-gray-900 cursor-pointer dark:text-gray-900 dark:bg-white dark:shadow-gray-100 md:py-3 md:px-6 hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.0 }}
        >
          Web
        </motion.div>

        {/* Mobile View  */}
        <div className="flex flex-wrap gap-2 md:hidden">
          {skillMobile.map((skill, i) => (
            <div
              key={i}
              className="inline-flex gap-1 py-1 px-3 bg-white dark:bg-transparent text-black dark:text-white border shadow-md border-black dark:border-white rounded-full"
            >
              {skill}
              <Icon title={skill} />
            </div>
          ))}
        </div>

        {/* Desktop View */}

        <Skill
          name="ReactJS"
          x="-2vw"
          y="-22vw"
          color="bg-blue-500 text-white"
        />
        <Skill
          name="NextJS"
          x="-13vw"
          y="-15vw"
          color="bg-black text-white dark:bg-white dark:text-black"
        />
        <Skill
          name="Tailwind CSS"
          x="2vw"
          y="-13vw"
          color="bg-blue-500 text-white"
        />
        <Skill
          name="Bootstrap"
          x="15vw"
          y="-15vw"
          color="bg-purple-500 text-white"
        />
        <Skill
          name="VueJS"
          x="28vw"
          y="-10vw"
          color="bg-green-700 text-white"
        />

        <Skill name="HTML" x="13vw" y="2vw" color="bg-orange-500 text-white" />
        <Skill name="CSS" x="-1vw" y="-9vw" color="bg-blue-500 text-white" />
        <Skill
          name="Javascript"
          x="-12vw"
          y="-2vw"
          color="bg-yellow-500 text-white"
        />
        <Skill
          name="Typescript"
          x="-23vw"
          y="-7vw"
          color="bg-blue-700 text-white"
        />
        <Skill name="GIT" x="16vw" y="-7vw" color="bg-orange-500 text-white" />
        <Skill name="PHP" x="-2vw" y="9vw" color="bg-slate-500 text-white" />

        <Skill name="Laravel" x="13vw" y="10vw" color="bg-red-500 text-white" />
        <Skill name="GCP" x="-31vw" y="3vw" color="bg-slate-500 text-white" />
        <Skill name="Sanity" x="-11vw" y="16vw" color="bg-red-500 text-white" />
        <Skill
          name="NodeJS"
          x="-16vw"
          y="7vw"
          color="bg-green-500 text-white"
        />
        <Skill
          name="Prisma"
          x="25vw"
          y="5vw"
          color="bg-black text-white dark:bg-white dark:text-black"
        />
        <Skill name="SQL" x="16vw" y="20vw" color="bg-blue-500 text-white" />
        <Skill name="REST" x="9vw" y="16vw" color="bg-slate-500 text-white" />
      </div>
    </div>
  );
};
