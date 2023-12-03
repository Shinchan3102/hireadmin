export const instituteTableStructure = [
    {
        header: 'INDEX',
        accessKey: 'index',
    },
    {
        header: 'ID',
        accessKey: 'id',
    },
    {
        header: 'INSTITUTE NAME',
        accessKey: 'name',
    },
    {
        header: 'DESCRIPTION',
        accessKey: 'description',
    },
    {
        header: 'ICON',
        accessKey: 'groupIconUrl',
    },
    {
        header: 'BACKGROUND IMAGE',
        accessKey: 'backgroundImage',
    },
    {
        header: 'OWNER ID',
        accessKey: 'ownerId',
        enableColumnFilter: true,
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

export const inititalData = {
    chatGroupType: 'COMPANY',
    description: '',
    name: '',
    groupIconUrl: '',
    backgroundImage: '',
    address: '',
    categoryListIds: [],
}

// export const getOverviewsData = (data) => {
//     const overviewsData = [
//         {
//             name: 'Group Type',
//             value: data?.chatGroupType,
//         },
//         {
//             name: 'Owner',
//             value: data?.ownerId,
//         },
//         {
//             name: 'Created On',
//             value: new Date(data?.createdDate)?.toDateString(),
//         },
//         {
//             name: 'Members',
//             value: data?.noOfMembers,
//         },
//         {
//             name: 'Posts',
//             value: data?.noOfPosts,
//         },
//     ];
//     return overviewsData;
// }