export async function getIPInfo(clientIP) {
    const url = `https://ipinfo.io/${clientIP}/json`
    const response = await fetch(url);

    const data = await response.json(); 

    return `IN ${data.city.toUpperCase()}, ${data.country}`;
}