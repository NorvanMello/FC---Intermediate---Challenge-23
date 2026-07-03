function formatTime(timeData) {
    const data = timeData.datetime;
    const dateObj = new Date(data)

    const hours = dateObj.getHours().toString().padStart(2, "0")
    const minutes = dateObj.getMinutes().toString().padStart(2, "0")

    const formattedTime = `${hours}:${minutes}`
    const tz = timeData.timezone;
    console.log(tz)
    const options = { timeZone: tz, timeZoneName: "short" };
    const parts = new Intl.DateTimeFormat("pt-BR", options).formatToParts(dateObj);

    const timeZoneAbbr = parts.find(p => p.type === "timeZoneName").value;

    console.log(formattedTime, timeZoneAbbr); 
    return formattedTime;
}

export function renderTime(timeContainer, timeData) {
    const timeTextContainer = document.createElement("div");
    timeTextContainer.classList.add("time-text-container");

    const greetingContainer = document.createElement("div");
    greetingContainer.classList.add("greeting-container");

    const icon = document.createElement("img");
    icon.classList.add("icon");
    icon.src = "./assets/desktop/icon-sun.svg";
    icon.alt = "";

    greetingContainer.append(icon)

    const greetingText = document.createElement("p");
    greetingText.classList.add("greeting-text");
    greetingText.textContent = "GOOD MORNING";

    greetingContainer.appendChild(greetingText)
    timeTextContainer.appendChild(greetingContainer)

    const timeDisplayContainer = document.createElement("div");
    timeDisplayContainer.classList.add("time-display-container");

    const time = document.createElement("time");
    time.classList.add("time");
    time.textContent = formatTime(timeData);

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
    place.textContent = "IN LONDON, UK";

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

    
    timeContainer.appendChild(timeTextContainer);
    timeContainer.appendChild(moreLessBtn)

    console.log(timeContainer)
}