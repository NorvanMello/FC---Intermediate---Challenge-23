export function renderQuote(quoteTextContainer) {
    const quoteAuthor = document.createElement("div");
    quoteAuthor.classList.add("quote-author");

    const quote = document.createElement("blockquote");
    quote.classList.add("quote");

    const p = document.createElement("p");

    p.textContent = "“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”"
    quote.appendChild(p)
    quoteAuthor.appendChild(quote)

    const author = document.createElement("figcaption");
    author.classList.add("author");
    author.textContent = "Ada Lovelace";

    quoteAuthor.appendChild(author);

    quoteTextContainer.appendChild(quoteAuthor)

    const reloadBtn = document.createElement("button");
    reloadBtn.classList.add("reload-btn");

    
}