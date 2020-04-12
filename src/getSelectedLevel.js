import levelOptions from "./levelOptions";
import asnycGetLevelList from "./asyncGetLevelList";
import loadDropdownFromGetApi from "./loadDropdownFromGetApi";


const getSelectedLevel = (url) => {
    console.log(url);
    let levels = levelOptions;
    levels.forEach((level) => {
        $('#levelOne div').append(level.title);
    });
    let optionOne = levels.filter(({ id }) => id == 3)[0];
    const keyArray = [];
    asnycGetLevelList(url, optionOne.endpoint)
        .then((response) => {
            const circle = "Inner Circle: ";
            const title = circle + optionOne.title;
            keyArray[0] = loadDropdownFromGetApi(title, response);
        });

    levels.forEach((level) => {
        if (level.id !== optionOne) {
            $('#levelTwo div').append(level.title);
        }
    });
    let optionTwo = levels.filter(({ id }) => id == 2)[0];
    asnycGetLevelList(url, optionTwo.endpoint)
        .then((response) => {
            const circle = "Middle Circle: ";
            const title = circle + optionTwo.title;
            keyArray[1] = loadDropdownFromGetApi(title, response);
        });

    levels.forEach((level) => {
        if (level.id !== optionTwo) {
            $('#levelThree div').append(level.title);
        }
    });
    let optionThree = levels.filter(({ id }) => id == 1)[0];
    asnycGetLevelList(url, optionThree.endpoint)
        .then((response) => {
            const circle = "Outer Circle: ";
            const title = circle + optionThree.title;
            keyArray[2] = loadDropdownFromGetApi(title, response);
        });
    
    
    // if (optionTwo) {
    //     keyArray.push(optionTwo);
    // }
    // if (optionThree) {
    //     keyArray.push(optionThree);
    // }
    return keyArray;
};


export default getSelectedLevel;