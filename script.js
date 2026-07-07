import { getTime } from "./worldTimeApi.js"
import { getQuote } from "./quoteApi.js"
import { renderQuote } from "./quote.js"
import { renderTime } from "./worldTime.js"
import { setBackgroundByTime } from "./dynamicBackground.js"
import { renderBottom, setupBottomToggle } from "./toggleBottom.js"

const quoteTextContainer = document.querySelector(".quote-container");
const timeContainer = document.querySelector(".time-container");
const reloadBtn = document.querySelector(".reload-btn");
// const infoContent = document.querySelector(".info-content")

async function loadQuote() {
    const quoteData = await getQuote()
    renderQuote(quoteData);

    reloadBtn.addEventListener("click", loadQuote)
}

async function init() {
    const timeData = await getTime()

    renderTime(timeContainer, timeData)

    setBackgroundByTime(timeData);

    setupBottomToggle();
    renderBottom(timeData);  
}

loadQuote();
init();
