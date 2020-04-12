import 'babel-polyfill'
import loadRest from "./loadRest";


$(document).ready(() => {
    // url for api call
    const url = "https://workbcjobs.api.gov.bc.ca/v1";
    $("#sinceApply").on("click", () => {
        let date = $("#sinceInput").val();
        $("#sinceApply").attr("disabled", true);
        $("#sinceApply").text("Loading & Analyzing...");
        $("#sinceApply").attr("id", "refresh");
        if (!date) {
            const today = new Date();
            date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
        }
        console.log("CLICK!");
        console.log(date);
        loadRest(url, date);
        $("#refresh").on("click", () => {
            window.location.reload(false); 
        });
    });
});





