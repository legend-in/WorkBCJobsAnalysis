import postApiCall from "./postApiCall";


const simpleGetSelectedList = (url, requestObj) => {
    const promArray = [];
    for (let i = 0; i < 18; ++i) {
        const requestData = {};
        Object.assign(requestData, requestObj);
        requestData["Industries"] = [i + 1];
        promArray[i] = $.ajax(postApiCall(url, "/jobs", requestData));
    }
    return promArray;
}


export default simpleGetSelectedList;