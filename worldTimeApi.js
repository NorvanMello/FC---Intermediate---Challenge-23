export async function getTime() {
    const url = `https://time.now/developer/api/timezone/America/Sao_Paulo`
    const response = await fetch(url);

    const data = await response.json(); 
    
    return data;
}