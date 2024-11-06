export async function getContest() {
    const response = await fetch('https://contestcalenderserver.onrender.com/api/getAllContest');
    return await response.json();
}

