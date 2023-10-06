import { Badge } from "../components/ui/badge";
import { client } from "../lib/sanity";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

import Search from "../components/Search";

import Icon from "../components/Icon";

interface Data {
  title: string;
  overview: string;
  status: string;
  link: string;
  _id: string;
  imageUrl: string;
  techstack: string[];
}
async function getProject() {
  const query = `  *[_type == 'project']
{
  title,
    overview,
    link,
    _id,
    status,
    "imageUrl": image.asset->url,
    techstack
}`;

  const data = await client.fetch(query);
  return data;
}

export const revalidate = 10;

export default async function Projects() {
  const data: Data[] = await getProject();

  return (
    <div className="divide-y divide-gray-500 dark:divide-gray-700">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
          All Projects
        </h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
        <div className="col-span-2 inline-flex justify-end items-center gap-1">
          Filter:{" "}
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="onprogress">On Progress</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-1">
          <Search />
        </div>
        {data.map((project) => {
          console.log(project.techstack);

          return (
            <article
              key={project._id}
              className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-400 bg-white shadow-lg dark:bg-black  shadow-gray-500 hover:scale-105 transition-all duration-300"
            >
              <div className="h-56 w-full relative">
                <a href={project.link} target="_blank">
                  <Image
                    fill
                    src={project.imageUrl}
                    alt="Image of the project"
                    className="h-full w-full object-cover"
                  />
                </a>
              </div>
              <div className="p-4 space-y-2 sm:p-6">
                <div className="flex justify-between gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <a
                          href={project.link}
                          target="_blank"
                          className="font-medium text-lg text-gray-900 text-left  line-clamp-1  dark:text-white"
                        >
                          {project.title}
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{project.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  {project.status === "On Progress" ? (
                    <Badge
                      variant="outlineWarning"
                      className="shadow-md gap-1 inline-flex justify-center items-center"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                      >
                        <path d="M13 2.03v2.02c4.39.54 7.5 4.53 6.96 8.92-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93-.45-4.75-4.22-8.5-8.95-8.97m-2 .03c-1.95.19-3.81.94-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68v-2M4.26 5.67A9.885 9.885 0 002.05 11h2c.19-1.42.75-2.77 1.64-3.9L4.26 5.67M2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8.002 8.002 0 014.06 13h-2m5.04 5.37l-1.43 1.37A9.994 9.994 0 0011 22v-2a8.002 8.002 0 01-3.9-1.63m9.72-3.18l-4.11-4.11c.41-1.04.18-2.26-.68-3.11-.9-.91-2.25-1.09-3.34-.59l1.94 1.94-1.35 1.36-1.99-1.95c-.54 1.09-.29 2.44.59 3.35.86.86 2.08 1.08 3.12.68l4.11 4.1c.18.19.45.19.63 0l1.04-1.03c.22-.18.22-.5.04-.64z" />
                      </svg>
                      {project.status}
                    </Badge>
                  ) : (
                    <Badge
                      variant="outlineSuccess"
                      className="shadow-md gap-1 inline-flex justify-center items-center"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                      >
                        <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" />
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                      </svg>
                      {project.status}
                    </Badge>
                  )}
                </div>
                <p className="line-clamp-3 leading-relaxed text-sm  text-gray-500 dark:text-gray-400">
                  {project.overview}
                </p>
                {/* <a
                href={project.link}
                target="_blank"
                className="group text-green-500 inline-flex items-center gap-1 text-sm font-medium"
              >
                Go to page
                <span className="block transition-all group-hover:ms-0.5">
                  →
                </span>
              </a> */}
                <div className="flex items-center gap-2 pt-2">
                  {project.techstack.map((title, i) => (
                    <div key={i}>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="cursor-default">
                            <Icon title={title} />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{title}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ))}
                  {/* <Nextjs />
                <Typescript />
                <Prisma />
                <Supabase /> */}
                  {/* <Next title="nextjs" /> */}
                  {/* <Icon title="nextjs" />
                <Icon title="prisma" />
                <Icon title="typescript" />
                <Icon title="supabase" /> */}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
