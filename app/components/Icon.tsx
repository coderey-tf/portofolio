import {
  Typescript,
  Prisma,
  Supabase,
  Bootstrap,
  GCP,
  Laravel,
  React,
  Vue,
  Nextjs,
  Sanity,
  Tailwind,
  Vercel,
  NodeJS,
  PostgreSQL,
  MySQL,
} from "./icons/Icons";

export default function Icon({ title }: { title: string }) {
  switch (title) {
    case "Next JS":
      return <Nextjs />;
    case "Typescript":
      return <Typescript />;
    case "Prisma":
      return <Prisma />;
    case "Supabase":
      return <Supabase />;
    case "Bootstrap":
      return <Bootstrap />;
    case "Laravel":
      return <Laravel />;
    case "Vue JS":
      return <Vue />;
    case "React JS":
      return <React />;
    case "Tailwind CSS":
      return <Tailwind />;
    case "GCP":
      return <GCP />;
    case "Sanity":
      return <Sanity />;
    case "Vercel":
      return <Vercel />;
    case "Node JS":
      return <NodeJS />;
    case "PostgreSQL":
      return <PostgreSQL />;
    case "MySQL":
      return <MySQL />;
  }
  return <div>Icon</div>;
}
