

export const postTableStructure = [
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
        enableSorting: true,
    },
    {
        header: 'USER ID',
        accessKey: 'user.userId',
        enableColumnFilter: true,
    },
    {
        header: 'TITLE',
        accessKey: 'title',
    },
    {
        header: 'CATEGORY',
        accessKey: 'contestCategory.name',
        enableColumnFilter: true,
        filterVariant: 'select',
    },
    {
        header: 'BOOSTS',
        accessKey: 'boost',
        enableSorting: true,
    },
    {
        header: 'LIKES',
        accessKey: 'noOfUpVotes',
        enableSorting: true,
    },
    {
        header: 'COMMENTS',
        accessKey: "noOfComments",
        enableSorting: true,
    },
    {
        header: 'DISLIKES',
        accessKey: 'noOfDownVotes',
        enableSorting: true,
    },
    {
        header: 'ADDED ON',
        accessKey: 'createdDate',
        enableSorting: true,
    },
];

export const getSortingQuery = (data) => {
    let query = '';
    if (data[0]?.id === 'createdDate') {
        query += `&ascCreatedDate=${data[0]?.desc}`
    }
    else if (data[0]?.id === 'noOfDownVotes') {
        query += `&ascNoOfDownVotes=${data[0]?.desc}`
    }
    else if (data[0]?.id === 'noOfUpVotes') {
        query += `&ascNoOfUpVotes=${data[0]?.desc}`
    }
    else if (data[0]?.id === 'noOfComments') {
        query += `&ascNoOfComments=${data[0]?.desc}`
    }
    else if (data[0]?.id === 'boost') {
        query += `&boost=${data[0]?.desc}`
    }
    else if (data[0]?.id === 'imageUrl') {
        query += `&containsImage=${data[0]?.desc}`
    }
    return query;
}

export const getFilteredQuery = (data, categories) => {
    let query = '';
    data?.map((item) => (
        item?.id === 'user.userId' ?
            query += `&userId=${item?.value}`
            :
            query += `&contestCategoryId=${categories?.filter((category) => category.name === item?.value)[0]?.id}`
    ));
    return query;
}

export const getGlobalFilterQuery = (data) => {
    let query = data ? `&searchString=${data}` : '';
    return query;
}

export const getOverviewsData = (data) => {
    const overviewsData = [
        {
            name: 'Username',
            value: data?.user?.name,
        },
        {
            name: 'Chat Group',
            value: data?.chatGroup?.name,
        },
        {
            name: 'Group Owner',
            value: data?.chatGroup?.ownerId,
        },
        {
            name: 'Comments',
            value: data?.noOfComments,
        },
        {
            name: 'Boosts',
            value: data?.boost,
        },
        {
            name: 'Up Counts',
            value: data?.noOfUpVotes,
        },
        {
            name: 'Down Counts',
            value: data?.noOfDownVotes,
        },
        {
            name: 'Posted On',
            value: new Date(data?.createdDate)?.toDateString(),
        },
    ];
    return overviewsData;
}