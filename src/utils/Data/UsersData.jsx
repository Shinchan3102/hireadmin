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