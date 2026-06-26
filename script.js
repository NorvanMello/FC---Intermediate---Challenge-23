import { getTime } from "./worldTimeApi.js"
import { getQuote } from "./quoteApi.js"
import { renderQuote } from "./quote.js"

const quoteTextContainer = document.querySelector(".quote-container")

async function init() {
    renderQuote(quoteTextContainer);
}

init();
