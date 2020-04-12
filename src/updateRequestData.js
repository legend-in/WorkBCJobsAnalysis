const updateRequestData = ({lastRequestDate, jobTypes, region, Industries}) => {
    const data = {
        "lastRequestDate": lastRequestDate
    }
    if (jobTypes) {
        data["jobTypes"] = jobTypes;
    }
    if (region) {
        data["region"] = region;
    }
    if (Industries) {
        data["Industries"] = Industries;
    }
    return data;
};


export default updateRequestData;

