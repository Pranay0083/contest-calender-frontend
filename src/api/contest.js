export async function getContest() {
    const response = await fetch('https://contestcalendarscraper.onrender.com/api/contests/getall');
    return await response.json();
}