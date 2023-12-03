export const API_URI = 'https://geektrust.s3-ap-southeast-1.amazonaws.com';

export const updatedData = (data, page, pageSize) => {
    const newData = data?.map((d, index) => {
        return { ...d, index: page * pageSize + index + 1 };
    })

    return newData;
}

export const updatedDataWithoutPage = (data) => {
    const newData = data?.map((d, index) => {
        return { ...d, index: index + 1 };
    })

    return newData;
}

export const jwtToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwcmlzbWF0aWNfc3BhbTI1MzMiLCJleHAiOjE3MTk2ODU3NzYsImlhdCI6MTY4ODE0OTc3Nn0.cA3Wk_1PLexia7brajS_8RfhNgAArgrdwB_m_oR4ztSIYQpnY2rDEMQLhQRq3ThCuQ3uuB-nRxTqusfSfTT75A';

export const headersAuth = {
    'Content-Type': 'multipart/form-data',
    // 'Authorization': localStorage.getItem('unbind')
    'Authorization': `Bearer ${jwtToken}`

}

// export const headers = {
//     Authorization: `Bearer ${jwtToken}`
// }

export const handleChange = (e, setData) => {
    const { name, value } = e.target;

    setData((prev) => {
        return { ...prev, [name]: value };
    })
}


export const checkDateType = (value) => {
    if (value === 'createdDate' || value === 'creationDate' || value === 'start_time' || value === 'endTime' || value === 'end_time') {
        return true;
    }
    return false;
}

export const checkImageType = (value) => {
    if (value === 'imageUrl' || value === 'iconUrl' || value === 'backgroundImage' || value === 'groupIconUrl') {
        return true;
    }
    return false;
}

export const checkHtmlType = (value) => {
    if (value === 'question' || value === 'answer' || value === 'description' || value === 'htmlUser') {
        return true;
    }
    return false;
}

export const checkVisibilityType = (value) => {
    if (value === 'isVisible' || value === 'visible' || value === 'activated' || value === 'isDeleted' || value === 'results_declared') {
        return true;
    }
    return false;
}