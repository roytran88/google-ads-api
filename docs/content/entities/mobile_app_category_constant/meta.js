module.exports = {
    name: 'MobileAppCategoryConstant',
    object: {
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the mobile app category constant. Mobile app category constant resource names have the form: <code>mobileAppCategoryConstants/{mobile_app_category_id}</code>',
        },
        name: { _type: 'string', _description: 'Mobile app category name.' },
        id: { _type: 'int32', _description: 'The ID of the mobile app category constant.' },
    },
    methods: ['get', 'list'],
}
