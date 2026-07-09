import { getTime } from "./worldTimeApi.js";
import { getQuote } from "./quoteApi.js";
import { renderQuote } from "./quote.js";
import { renderTime } from "./worldTime.js";
import { setBackgroundByTime } from "./dynamicBackground.js";
import { renderBottom, setupBottomToggle } from "./toggleBottom.js";
import { getIPInfo } from "./ipInfoAPI.js";

const timeContainer = document.querySelector(".time-container");
const reloadBtn = document.querySelector(".reload-btn");

const icon = document.querySelector(".icon")
const greetingText = document.querySelector(".greeting-text");
    
const time = document.querySelector(".time");
const place = document.querySelector(".place");

async function loadQuote() {
    try {
        const quoteData = await getQuote()
        renderQuote(quoteData);
    } catch (error) {
        console.error(error);

        renderQuote({ quote: "“Opportunity Is Missed By Most People Because It Is Dressed In Overalls And Looks Like Work.”", author: "Thomas A. Edison" });
    } 
}

reloadBtn.addEventListener("click", loadQuote)

async function init() {
    let timeData;
    let ipInfo;

    try {
        timeData = await getTime()
        ipInfo = await getIPInfo(timeData.client_ip);
    } catch (error) {
        console.log(error)

        timeData = {
            datetime: new Date().toISOString(),
            timezone: "Local time"
        };

        ipInfo = "IN YOUR CURRENT LOCATION"
    }

    

    renderTime(timeData, ipInfo, { icon, greetingText, time, place });
    setBackgroundByTime(timeData);
    renderBottom(timeData);  
    setupBottomToggle();
}

loadQuote();
init();
