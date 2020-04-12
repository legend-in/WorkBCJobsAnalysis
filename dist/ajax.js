$(document).ready(() => {
    $.ajax({
        // beforeSend: () => {alert("ready?")},
        url: "https://tweet-api.webdxd.com" + "/tweet",
        methods: "GET",
        data: {
        },
        success: (response) => {
            console.log(response);
            const news = response.tweets[1].content;
            console.log(news);
            const newsHtml = "<h2>" + news + "</h2>";
            $("body").append(newsHtml);
        }
    });
    $("h1").text("HAHA");


    const url = "https://workbcjobs.api.gov.bc.ca/v1";

    $.ajax(getUrl(url, "/majorProjects"));
    $.ajax(getUrl(url, "/jobTypes"));
    $.ajax(getUrl(url, "/regions"));
    // $.ajax(getUrl(url, "/Industries"));

    $.ajax({
        url: url + "/jobs",
        method: "POST",
        data: {
            "lastRequestDate": "2020-03-01",
            "region": 2
        },
        success: (response) => {
            res = response;
            console.log(response);
        }
    });

});

const createList = () => {
    const list = $("<ol></ol>");
    $("body").append(list);
    
};

const getUrl = (url, endpoint) => {
    return {
        url: url + endpoint,
        methods: "GET",
        data: {
           
        },
        success: (response) => {
            $("body").append(`<h1>${endpoint}</h1>`);
            createList();
            for (let item of response) {
                let orderList = $("<li></li>").text(`id: ${item["id"]}, caption: ${item["caption"]}`);
                $("ol").last().append(orderList);
            }
            console.log(response);
        },
        error: (error, status, xhr) => {
            console.log(error);
            console.log(status);
            console.log(xhr);
        }
    };
};


var res;

const getJob = (key) => {
    return res.jobs.filter(job => {
        if (job["jobDescription"]) {
            return job["jobDescription"].toLowerCase().includes(key) || job["jobTitle"].toLowerCase().includes(key);
        }
    });
};
