export const feedbackTableStructure = [
    {
        header: 'INDEX',
        accessKey: 'index',
    },
    {
        header: 'ID',
        accessKey: 'id',
    },
    {
        header: 'IMAGE',
        accessKey: 'imageUrl',
    },
    {
        header: 'USER ID',
        accessKey: 'user.userId',
        enableColumnFilter: true,
    },
    {
        header: 'DESCRIPTION',
        accessKey: 'description',
    },
    {
        header: 'QUERY',
        accessKey: 'feedbackQuery',
        enableColumnFilter: true,
        filterVariant: 'select',
        filterSelectOptions: ['BUG', 'OTHER', 'UI'],
    },
    {
        header: 'STARS',
        accessKey: 'stars',
        enableColumnFilter: true,
    },
    {
        header: 'CREATED ON',
        accessKey: 'creationDate',
    },
];

export const getFilteredQuery = (data) => {
    let query = '';
    data?.map((item) => (
        item?.id === 'user.userId' ?
            query += `&userId=${item?.value}`
            :
            query += `&${item?.id}=${item?.value}`
    ))
    return query;
}

export const getOverviewsData = (data) => {
    const overviewsData = [
        {
            name: 'User',
            value: data?.user?.userId,
        },
        {
            name: 'Stars',
            value: data?.stars,
        },
        {
            name: 'Added On',
            value: new Date(data?.creationDate)?.toDateString(),
        },
    ];
    return overviewsData;
}