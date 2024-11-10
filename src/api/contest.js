export async function getContest() {
    const response = await fetch('https://scrappercontestcalendar.onrender.com/getAllContests');
    return await response.json();
}

