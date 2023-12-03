export const bannerTableStructure = [
    {
        header: 'ID',
        accessKey: 'id'
    },
    {
        header: 'IMAGE',
        accessKey: 'imageUrl',
    },
    {
        header: 'VISIBILITY',
        accessKey: 'isVisible',
        enableSorting: true,
    },
    {
        header: 'ADDED ON',
        accessKey: 'creationDate',
        enableSorting: true,
    },
    {
        header: 'REDIRECT TO',
        accessKey: 'redirectUrl'
    }
];

export const inititalData = {
    title: '',
    description: '',
    info: '',
    bannerType: 'CONTEST',
    imageUrl: '',
    redirectUrl: '',
    isVisible: ''
}

export const getSortingQuery = (data) => {
    let query = '';
    if (data[0]?.id === 'creationDate') {
        query += `?ASCbyCreationDate=${data[0]?.desc}`
    }
    else if (data[0]?.id === 'isVisible') {
        query += `?isVisible=${data[0]?.desc}`
    }
    return query;
}