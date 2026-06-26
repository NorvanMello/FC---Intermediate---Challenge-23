export async function getQuote() {
    const url = `https://zenquotes.io/api/random`
    const response = await fetch(url);

    const data = await response.json(); 
    
    return data;
}