export const profileOptions = [
    {
        name: 'My Profile',
        action: '/profile',
    },
    {
        name: 'Groups',
        action: '/profile',
    },
    {
        name: 'Posts',
        action: '/profile',
    },
    {
        name: 'Feedbacks',
        action: '/profile',
    }
];

export const getProfileData = (data) => {
    const personalData = [
        {
            name: 'Username',
            value: data?.name,
        },
        {
            name: 'UserId',
            value: '@' + data?.userId,
        },
        {
            name: 'Email',
            value: data?.email,
        },
        {
            name: 'Mobile',
            value: data?.mobileNumber,
        },
        {
            name: 'User Type',
            value: data?.type,
        },
        {
            name: 'Category',
            value: data?.chosenCategory?.name,
        },
        {
            name: 'Rating',
            value: data?.rating,
        },
        {
            name: 'Added on',
            value: new Date(data?.creationDate).toDateString(),
        }
    ];

    return personalData;
}