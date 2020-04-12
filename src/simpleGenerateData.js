const simpleGenerateData = (date, responseArray, keyArray) => {
    const data = {"name": `Total jobs since ${date}`};
    data["children"] = [];
    for (let i = 0; i < responseArray.length; ++i) {
        data["children"][i] = {
            "name": keyArray[0][i],
            "children": []
        };
        for (let j = 0; j < keyArray[1].length; ++j) {
            data["children"][i]["children"][j] = {
                "name" : keyArray[1][j],
                "children": []
            };
            for (let k = 0; k < keyArray[2].length; ++k) {
                const jobByIndustry = responseArray[i];
                const val = jobByIndustry["jobs"].filter(({locations, jobTypes}) => {
                    if (locations && locations[0]&& locations[0]["region"]) {
                        if (locations[0]["region"]["caption"] == keyArray[1][j]) {
                            for (let {caption} of jobTypes) {
                                if (caption == keyArray[2][k]) {
                                    return true;
                                }
                            }
                        }
                    }
                }).length;
                data["children"][i]["children"][j]["children"][k] = {
                    "name" : keyArray[2][k],
                    "value": val
                };
            }
        }
    }
    console.log(data);
    return data;
};


export default simpleGenerateData;