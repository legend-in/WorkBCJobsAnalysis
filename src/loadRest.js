import 'babel-polyfill'
import getSelectedLevel from "./getSelectedLevel";
import updateRequestData from "./updateRequestData";
import getSelectedList from "./getSelectedList";
import simpleGetSelectedList from "./simpleGetSelectedList";
import postApiCall from "./postApiCall";
import myD3 from "./myD3";
import simpleGenerateData from './simpleGenerateData';



const loadRest = (url, date) => {
    // object saved for later transferring to data inside the post request 
    const requestObj = {};

    // get the date (String) selected by the user
    requestObj["lastRequestDate"] = date;

    // display the level by 1st, 2nd, and 3rd option, and return array of object by user selection order.
    // Meanwhile async get the list of each selected level
    // optionOrder[]
    const keyArray = getSelectedLevel(url);
    console.log(keyArray)
    
    // // get the selected list of each level 
    // const lists = getSelectedList();
    // console.log(lists);
    // lists.forEach((list, index) => {
    //     requestObj[optionOrder[index]["key"]] = list;
    // });
    // console.log(requestObj);

    // const requestData = updateRequestData(requestObj);
    // console.log(requestData);


    const promArray = simpleGetSelectedList(url, requestObj);
    // console.log(promArray);


    // async call to post api
    (async () => {
        const prom = await Promise.all(promArray);
        return prom;
    })().
        then((responseArray) => {
            console.log(responseArray);
            const data = simpleGenerateData(date, responseArray, keyArray);
            myD3(data);
            $("#refresh").text("Refresh");
            $("#refresh").attr("disabled", false);
        });
};

export default loadRest;