export async function getContest() {
    const response = await fetch('https://contestcalendarscraper.onrender.com/api/contests/getAllContests');
    return await response.json();
}