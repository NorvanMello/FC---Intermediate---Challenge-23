import { getTime } from "./worldTimeApi.js"
import { getQuote } from "./quoteApi.js"
import { renderQuote } from "./quote.js"
import { renderTime } from "./worldTime.js"

const quoteTextContainer = document.querySelector(".quote-container");
const timeContainer = document.querySelector(".time-container");

async function loadQuote() {
    const quoteData = await getQuote()
    renderQuote(quoteTextContainer, quoteData, loadQuote); 
}

async function loadTime() {
    const timeData = await getTime()
    console.log(timeData)
    renderTime(timeContainer, timeData)
}

loadQuote();
loadTime();
