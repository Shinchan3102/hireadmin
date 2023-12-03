export const groupTableStructure = [
    {
        header: 'INDEX',
        accessKey: 'index',
    },
    {
        header: 'ID',
        accessKey: 'id',
    },
    {
        header: 'GROUP NAME',
        accessKey: 'name',
    },
    {
        header: 'DESCRIPTION',
        accessKey: 'description',
    },
    {
        header: 'OWNER ID',
        accessKey: 'ownerId',
        enableColumnFilter: true,
    },
    {
        header: 'GROUP TYPE',
        accessKey: 'chatGroupType',
        enableColumnFilter: true,
        filterVariant: 'select',
        filterSelectOptions: ['COMPANY', 'INDIVIDUAL', 'SCHOOL'],
    },
    {
        header: 'POSTS',
        accessKey: "noOfPosts",
        enableSorting: true,
    },
    {
        header: 'MEMBERS',
        accessKey: 'noOfMembers',
        enableSorting: true,
    },
    {
        header: 'DELETED',
        accessKey: 'isDeleted',
        enableSorting: true,
    },
    {
        header: 'ADDED ON',
        accessKey: 'createdDate',
    },
];

export const getSortingQuery = (data) => {
    let query = '';
    if (data[0]?.id === 'noOfMembers') {
        query += `&ascSortByMembers=${data[0]?.desc}`
    }
    else if (data[0]?.id === 'noOfPosts') {
        query += `&ascSortByPosts=${data[0]?.desc}`
    }
    else if (data[0]?.id === 'isDeleted') {
        query += `&isDeleted=${data[0]?.desc}`
    }
    return query;
}

export const getFilteredQuery = (data) => {
    let query = '';
    data?.map((item) => query += `&${item?.id}=${item?.value}`);
    return query;
}

export const getGlobalFilterQuery = (data) => {
    let query = data ? `&searchGroup=${data}` : '';
    return query;
}

export const getOverviewsData = (data) => {
    const overviewsData = [
        {
            name: 'Group Type',
            value: data?.chatGroupType,
        },
        {
            name: 'Owner',
            value: data?.ownerId,
        },
        {
            name: 'Created On',
            value: new Date(data?.createdDate)?.toDateString(),
        },
        {
            name: 'Members',
            value: data?.noOfMembers,
        },
        {
            name: 'Posts',
            value: data?.noOfPosts,
        },
    ];
    return overviewsData;
}