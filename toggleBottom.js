function createInfoItem(dataValues) {
    const infoContent = document.querySelector(".info-content")

    const infoItem = document.createElement("div");
    infoItem.classList.add("info-item");

    const infotext = document.createElement("dt");
    infotext.classList.add("info-text");
    infotext.textContent = dataValues.text;

    const infoValue = document.createElement("dd");
    infoValue.classList.add("info-value");
    infoValue.textContent = dataValues.value;

    infoItem.append(infotext)
    infoItem.append(infoValue)
    infoContent.appendChild(infoItem)
}

export function setupBottomToggle() {
    const moreLessBtn = document.querySelector(".more-less-btn");
    const arrow = document.querySelector(".arrow");

    const bottomSide = document.querySelector(".bottom-side");
    const topSide = document.querySelector(".top-side")

    const quoteContainer = document.querySelector(".quote-container")

    moreLessBtn.addEventListener("click", () => {
        bottomSide.classList.toggle("hidden")

        const isHidden = bottomSide.classList.contains("hidden")

        moreLessBtn.firstChild.textContent = isHidden ? "MORE" : "LESS";
        arrow.src = isHidden ? "./assets/desktop/arrow-down.svg" : "./assets/desktop/icon-arrow-up.svg"
        
        quoteContainer.classList.toggle("hidden")

        const isQuoteHidden = quoteContainer.classList.contains("hidden");

        isQuoteHidden ? topSide.style.paddingTop = "80px" : topSide.style.paddingTop = "32px"
    })
}

export function renderBottom(timeData) {
    const bottomDataValues = [
        {
            text: "CURRENT TIMEZONE",
            value: timeData.timezone
        },
        {
            text: "DAY OF THE YEAR",
            value: timeData.day_of_year
        },
        {
            text: "DAY OF THE WEEK",
            value: timeData.day_of_week
        },
        {
            text: "WEEK NUMBER",
            value: timeData.week_number
        }
    ]

    bottomDataValues.forEach(dataValues => {
        createInfoItem(dataValues)
    })
}
