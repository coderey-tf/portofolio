import { client } from "../lib/sanity";
import Image from "next/image";

interface Data {
  title: string;
  overview: string;
  link: string;
  _id: string;
  imageUrl: string;
}
async function getProject() {
  const query = `  *[_type == 'project']
{
  title,
    overview,
    link,
    _id,
    "imageUrl": image.asset->url
  
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
        {data.map((project) => (
          <article
            key={project._id}
            className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-300 bg-white shadow-lg dark:bg-black  shadow-green-200"
          >
            <div className="h-56 w-full relative">
              <Image
                fill
                src={project.imageUrl}
                alt="Image of the project"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4 space-y-2 sm:p-6">
              <a
                href={project.link}
                target="_blank"
                className="font-medium text-lg text-gray-900 dark:text-white"
              >
                {project.title}
              </a>
              <p className="line-clamp-3 leading-relaxed text-sm  text-gray-500 dark:text-gray-400">
                {project.overview}
              </p>
              <a
                href={project.link}
                target="_blank"
                className="group text-green-500 inline-flex items-center gap-1 text-sm font-medium"
              >
                Learn More!{" "}
                <span className="block transition-all group-hover:ms-0.5">
                  →
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
