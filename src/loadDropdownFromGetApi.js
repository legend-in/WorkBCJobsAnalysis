const createList = (elem, title) => {
    const div = $("<div style='border-style: solid; padding-left: 0.5em; padding-right: 0.5em'></div>");
    const list = $("<ol></ol>");
    $(elem).append(div);
    $(div).append(`<h3>${title}</h3>`)
    $(div).append(list);
    
};

const loadDropdownFromGetApi = (title, response) => {
    const options = []
    createList(".lists", title);
    for (let item of response) {
        let orderList = $("<li></li>").text(`${item["caption"]}`);
        $("ol").last().append(orderList);
        options.push(`${item["caption"]}`);
    }
    return options;
};


export default loadDropdownFromGetApi;