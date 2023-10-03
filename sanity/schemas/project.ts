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
        }
    ]
}