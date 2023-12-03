export const userTableStructure = [
    {
        header: 'INDEX',
        accessKey: 'index'
    },
    {
        header: 'USER ID',
        accessKey: 'id',
    },
    {
        header: 'NAME',
        accessKey: 'name',
    },
    {
        header: 'EMAIL',
        accessKey: 'email',
    },
    {
        header: 'ROLE',
        accessKey: 'role'
    },
];

export const updatedUserData = (data, page, pageSize) => {
    const newData = data?.map((d, index) => {
        // console.log(d)
        return { ...d, index: page * pageSize + index + 1, htmlUser: d?.activated ? `<div class='text-green-500'>ACTIVE</div>` : `<div class='text-red-500'>BLOCKED</div>` };
    })
    console.log(newData)
    return newData;
}

export const getSortingQuery = (data) => {
    let query = '';
    if (data[0]?.id === 'creationDate') {
        query += `&ASCbyCreationDate=${data[0]?.desc}`
    }
    else if (data[0]?.id === 'rating') {
        query += `&ASCbyRating=${data[0]?.desc}`
    }
    else if (data[0]?.id === 'activated') {
        query += `&activated=${data[0]?.desc}`
    }
    return query;
}

export const getFilteredQuery = (data, categories) => {
    let query = '';
    const category = categories?.filter((item) => item?.name === data[0]?.value)[0];
    query = category ? `&chosenCategoryId=${category?.id}` : '';
    return query;
}

export const getGlobalFilter = (data) => {
    let query = data ? `&searchString=${data}` : '';
    return query;
}

export const getOverviewsData = (data) => {
    const overviewsData = [
        {
            name: 'Username',
            value: data?.name,
        },
        {
            name: 'User Type',
            value: data?.type,
        },
        {
            name: 'Email',
            value: data?.email,
        },
        {
            name: 'Phone number',
            value: data?.mobileNumber,
        },
        {
            name: 'Verified',
            value: data?.isVerified,
        },
        {
            name: 'Active',
            value: data?.activated,
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
            name: 'Created On',
            value: new Date(data?.creationDate)?.toDateString(),
        }
    ];
    return overviewsData;
}

