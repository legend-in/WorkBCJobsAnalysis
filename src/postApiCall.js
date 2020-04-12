const postApiCall = (url, endpoint, data) => {
    return {
        url: url + endpoint,
        method: "POST",
        data: data,
        error: (error, status, xhr) => {
            console.log(error);
            console.log(status);
            console.log(xhr);
        }
    };
};


export default postApiCall;