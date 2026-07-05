import { getIPInfo } from "./ipInfoAPI.js";

export function formatTime(timeData) {
    const data = timeData.datetime;
    const dateObj = new Date(data)

    const hours = dateObj.getHours().toString().padStart(2, "0")
    const minutes = dateObj.getMinutes().toString().padStart(2, "0")

    const formattedTime = `${hours}:${minutes}`
    
    return formattedTime;
}

function greetingTime(timeData) {
    const hours = timeData.slice(0, 2)
    
    if(hours > 5 && hours < 12) {
        return "GOOD MORNING"
    } if(hours >= 12 && hours < 18) {
        return "GOOD AFTERNOON"
    } else {
        return "GOOD EVENING"
    }
}

function selectIcon(timeData) {
    const hours = timeData.slice(0, 2)

    if(hours > 5 && hours < 18) {
        return "./assets/desktop/icon-sun.svg"
    }

    return "./assets/desktop/icon-moon.svg"
}

function expandInfo(btnText, arrow, moreLessBtn) {
    const bottomSide = document.querySelector(".bottom-side");
    const topSide = document.querySelector(".top-side")
    const quoteContainer = document.querySelector(".quote-container");

    if(btnText.target.innerText === "MORE") {
        btnText.target.textContent = "LESS"
        arrow.src = "./assets/desktop/icon-arrow-up.svg"
        moreLessBtn.appendChild(arrow);

        topSide.style.paddingTop = "80px";
    } else {
        btnText.target.textContent = "MORE"
        arrow.src = "./assets/desktop/arrow-down.svg"
        moreLessBtn.appendChild(arrow);

        topSide.style.paddingTop = "32px";
    }
    
    bottomSide.classList.toggle("hidden")
    quoteContainer.classList.toggle("hidden")
}

export async function renderTime(timeContainer, timeData) {
    const formattedTime = formatTime(timeData);

    const timeTextContainer = document.createElement("div");
    timeTextContainer.classList.add("time-text-container");

    const greetingContainer = document.createElement("div");
    greetingContainer.classList.add("greeting-container");

    const icon = document.createElement("img");
    icon.classList.add("icon");
    icon.src = selectIcon(formattedTime);
    icon.alt = "";

    greetingContainer.append(icon)

    const greetingText = document.createElement("p");
    greetingText.classList.add("greeting-text");
    greetingText.textContent = greetingTime(formattedTime);

    greetingContainer.appendChild(greetingText)
    timeTextContainer.appendChild(greetingContainer)

    const timeDisplayContainer = document.createElement("div");
    timeDisplayContainer.classList.add("time-display-container");

    const time = document.createElement("time");
    time.classList.add("time");
    time.textContent = formattedTime;

    timeDisplayContainer.append(time);

    const summerTimeText = document.createElement("span");
    summerTimeText.classList.add("summer-time-text");
    summerTimeText.textContent = "BST";

    timeDisplayContainer.appendChild(summerTimeText);
    timeTextContainer.appendChild(timeDisplayContainer);

    const placeContainer = document.createElement("div");
    placeContainer.classList.add("place-container");

    const place = document.createElement("span");
    place.classList.add("place");
    place.textContent = await getIPInfo(timeData.client_ip);;

    placeContainer.appendChild(place);
    timeTextContainer.appendChild(placeContainer);

    const moreLessBtn = document.createElement("button");
    moreLessBtn.classList.add("more-less-btn");

    const arrow = document.createElement("img");
    arrow.classList.add("arrow");
    arrow.src = "./assets/desktop/arrow-down.svg";
    arrow.alt = "";

    moreLessBtn.textContent = "MORE";
    moreLessBtn.appendChild(arrow);

    moreLessBtn.addEventListener("click", (event) => {
        expandInfo(event, arrow, moreLessBtn)
    })

    timeContainer.appendChild(timeTextContainer);
    timeContainer.appendChild(moreLessBtn)

    console.log(timeContainer)
}
