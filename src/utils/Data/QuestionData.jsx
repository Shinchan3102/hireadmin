export const questionTagsTableStructure = [
    {
        header: 'INDEX',
        accessKey: 'index'
    },
    {
        header: 'ID',
        accessKey: 'id',
    },
    {
        header: 'NAME',
        accessKey: 'name',
    },
    {
        header: 'ICON',
        accessKey: 'iconUrl',
        enableSorting: true,
    },
    {
        header: 'TYPE',
        accessKey: 'tagType',
        enableColumnFilter: true,
        filterVariant: 'select',
        filterSelectOptions: ['CHAPTER', 'CONCEPT', 'OTHER'],
    },
    {
        header: 'Category',
        accessKey: 'contestCategory.name',
        enableColumnFilter: true,
        filterVariant: 'select',
    }
];

export const subjectTableStructure = [
    {
        header: 'INDEX',
        accessKey: 'index'
    },
    {
        header: 'ID',
        accessKey: 'id',
    },
    {
        header: 'NAME',
        accessKey: 'name',
    },
    {
        header: 'Category',
        accessKey: 'contestCategory.name',
        enableColumnFilter: true,
        filterVariant: 'select',
    }
];

export const questionTableStructure = [
    {
        header: 'INDEX',
        accessKey: 'index'
    },
    {
        header: 'ID',
        accessKey: 'id',
    },
    {
        header: 'QUESTION TYPE',
        accessKey: 'questionType',
    },
    {
        header: 'QUESTION',
        accessKey: 'question',
    },
    {
        header: 'ANSWER',
        accessKey: 'answer'
    },
    {
        header: 'CONTEST ID',
        accessKey: 'contestId'
    }
];

export const updatedData = (data, page, size, categories) => {
    const newData = data?.map((d, index) => {
        let contestCategory = categories?.filter((item) => item.id === d.contestCategoryId)[0];
        return { ...d, index: page * size + index + 1, contestCategory };
    })

    return newData;
}

export const updatedDataWithoutPage = (data, categories) => {
    const newData = data?.map((d, index) => {
        let contestCategory = categories?.filter((item) => item.id === d.contestCategoryId)[0];
        return { ...d, index: index + 1, contestCategory };
    })

    return newData;
}

export const getSortingQuery = (data) => {
    let query = '';
    if (data[0]?.id === 'iconUrl') {
        query += `&containsIcon=${data[0]?.desc}`
    }
    return query;
}

export const getFilteredQuery = (data, categories) => {
    let query = '';
    data?.map((item) => (
        item?.id === 'tagType' ?
            query += `&tagType=${item?.value}`
            :
            query += `&contestCategoryId=${categories?.filter((category) => category.name === item?.value)[0]?.id}`
    ));
    return query;
}

export const getGlobalFilterQuery = (data) => {
    let query = data ? `&searchString=${data}` : '';
    return query;
}

export const getTagsOverviewsData = (data) => {
    const overviewsData = [
        {
            name: 'Type',
            value: data?.tagType,
        },
        {
            name: 'Category',
            value: data?.contestCategory?.name
        }
    ];
    return overviewsData;
}