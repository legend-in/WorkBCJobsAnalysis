const getApiCall = (url, endpoint) => {
    return {
        url: url + endpoint,
        methods: "GET",
        error: (error, status, xhr) => {
            console.log(error);
            console.log(status);
            console.log(xhr);
        }
    };
};


export default getApiCall;