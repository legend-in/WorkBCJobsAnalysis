import getApiCall from "./getApiCall";


const asnycGetLevelList = async (url, endpoint) => {
    const prom = await $.ajax(getApiCall(url, endpoint));
    return prom;
};


export default asnycGetLevelList;