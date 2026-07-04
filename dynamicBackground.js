import { formatTime } from "./worldTime.js"

export function setBackgroundByTime(timeData) {
    const formattedTime = formatTime(timeData)
    const hours = formattedTime.slice(0, 2)
    
    const topSide = document.querySelector(".top-side")

    console.log(topSide)
    
    if(hours > 5 && hours < 18) {
        topSide.style.backgroundImage = " url('./assets/mobile/bg-image-daytime.jpg')"
    } else {
        topSide.style.backgroundImage = " url('./assets/mobile/bg-image-nighttime.jpg')"
    }
}