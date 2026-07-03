export function renderQuote(quoteTextContainer, quoteData, onReload) {
    quoteTextContainer.innerHTML = "";
    
    const quoteAuthor = document.createElement("div");
    quoteAuthor.classList.add("quote-author");

    const quote = document.createElement("blockquote");
    quote.classList.add("quote");

    const p = document.createElement("p");

    p.textContent = `“${quoteData.quote}”`
    quote.appendChild(p)
    quoteAuthor.appendChild(quote)

    const author = document.createElement("figcaption");
    author.classList.add("author");
    author.textContent = quoteData.author;

    quoteAuthor.appendChild(author);

    quoteTextContainer.appendChild(quoteAuthor)

    const reloadBtn = document.createElement("button");
    reloadBtn.classList.add("reload-btn");
    reloadBtn.type = "button";
    reloadBtn.setAttribute("aria-label", "Load another quote")

    const reloadImg = document.createElement("img");
    reloadImg.src = "./assets/desktop/icon-refresh.svg";
    reloadImg.alt = "";

    reloadBtn.appendChild(reloadImg);

    reloadBtn.addEventListener("click", onReload)

    quoteTextContainer.appendChild(reloadBtn)
}
