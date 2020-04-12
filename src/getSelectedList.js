const getSelectedList = () => {
    let listOne = [1];
    let listTwo = [1, 2];
    let listThree = [1];
    const listArray = [listOne];
    if (listTwo.length != 0) {
        listArray.push(listTwo);
    }
    if (listThree.length != 0) {
        listArray.push(listThree);
    }
    return listArray;
}


export default getSelectedList;