export async function getContest() {
    const response = await fetch('http://localhost:3000/getAllContests');
    return await response.json();
}