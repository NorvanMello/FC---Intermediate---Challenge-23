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

export async function renderTime(timeContainer, timeData) {
    const icon = document.querySelector(".icon")
    const greetingText = document.querySelector(".greeting-text");
    
    const time = document.querySelector(".time");
    const place = document.querySelector(".place");

    const formattedTime = formatTime(timeData);

    icon.src = selectIcon(formattedTime)
    greetingText.textContent = greetingTime(formattedTime)

    time.textContent = formattedTime;
    place.textContent = await getIPInfo(timeData.client_ip);
}
