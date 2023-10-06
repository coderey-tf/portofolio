import { defineField } from "sanity";

export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'overview',
            type: 'string',
            title: 'Small Overview'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'link',
            type: 'string',
            title: 'Link'
        },
        {
            name: 'status',
            type: 'string',
            title: 'Project Status',
            initialValue: 'completed',
            options: {
                list: [
                    { title: 'Completed', value: 'Completed' },
                    { title: 'On Progress', value: 'On Progress' },
                ], // <-- predefined values
                layout: 'radio' // <-- defaults to 'dropdown'
            }
        },
        {
            name: 'techstack',
            type: 'array',
            of: [{ type: 'string' }],
            title: 'Tech Stack',
            options: {

                list: [
                    { title: 'Typescript', value: 'Typescript' },
                    { title: 'Next JS', value: 'Next JS' },
                    { title: 'Prisma', value: 'Prisma' },
                    { title: 'Supabase', value: 'Supabase' },
                    { title: 'GCP', value: 'GCP' },
                    { title: 'Tailwind CSS', value: 'Tailwind CSS' },
                    { title: 'Laravel', value: 'Laravel' },
                    { title: 'Sanity', value: 'Sanity' },
                    { title: 'React JS', value: 'React JS' },
                    { title: 'Vue JS', value: 'Vue JS' },
                    { title: 'Bootstrap', value: 'Bootstrap' },
                    { title: 'Vercel', value: 'Vercel' },
                    { title: 'Node JS', value: 'Node JS' },
                    { title: 'PostgreSQL', value: 'PostgreSQL' },
                    { title: 'MySQL', value: 'MySQL' },

                ], // <-- predefined values
            }
        },

    ]
}