export function renderQuote(quoteData) {
    const quoteText = document.querySelector(".quote-text")
    const author = document.querySelector(".author")

    quoteText.textContent = `“${quoteData.quote}”`
    author.textContent = quoteData.author;
}
