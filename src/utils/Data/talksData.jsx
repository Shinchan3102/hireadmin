export const talkTableStructure = [
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
        header: 'TITLE',
        accessKey: 'name',
    },
    {
        header: 'DESCRIPTION',
        accessKey: 'description',
    },
    {
        header: 'DURATION',
        accessKey: 'duration',
    },
    {
        header: 'VISIBILITY',
        accessKey: 'visible',
        enableSorting: true,
    },
    {
        header: 'START TIME',
        accessKey: "start_time",
        enableSorting: true,
    },
    {
        header: 'END TIME',
        accessKey: "endTime",
    },
    {
        header: 'REGISTERED COUNT',
        accessKey: 'noOfStudentsRegistered',
        enableSorting: true,
    },
    {
        header: 'ADDED ON',
        accessKey: 'creationDate',
    },
];

export const getSortingQuery = (data) => {
    let query = '';
    if (data[0]?.id === 'noOfStudentsRegistered') {
        query += `&ASCByNoOfRegisteredUsers=${data[0]?.desc}`
    }
    else if (data[0]?.id === 'start_time') {
        query += `&ASCByStartDate=${data[0]?.desc}`
    }
    else if (data[0]?.id === 'visible') {
        query += `&isVisible=${data[0]?.desc}`
    }
    return query;
}

export const getOverviewsData = (data) => {
    const overviewsData = [
        {
            name: 'Registrations',
            value: data?.noOfStudentsRegistered
        },
        {
            name: 'Link',
            value: data?.joinLink,
        },
        {
            name: 'Duration',
            value: data?.duration,
        },
        {
            name: 'Timings',
            value: `${new Date(data?.start_time)?.toDateString()} - ${new Date(data?.endTime)?.toDateString()}`,
        },
        {
            name: 'Created On',
            value: new Date(data?.creationDate)?.toDateString(),
        },
    ];
    return overviewsData;
}