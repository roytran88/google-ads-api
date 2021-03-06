module.exports = {
    name: 'Video',
    object: {
        id: { _type: 'string', _description: 'The ID of the video.' },
        channel_id: { _type: 'string', _description: 'The owner channel id of the video.' },
        duration_millis: { _type: 'int64', _description: 'The duration of the video in milliseconds.' },
        title: { _type: 'string', _description: 'The title of the video.' },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the video. Video resource names have the form: <code>customers/{customer_id}/videos/{video_id}</code>',
        },
    },
    methods: ['get', 'list'],
}
