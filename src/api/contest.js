// /contest
export async function getContest() {
    const response = await fetch('https://contestcalendarscraper.onrender.com/api/contests/getall');
    return await response.json();
}

export async function scrapeContest() {
    const response = await fetch('https://contestcalendarscraper.onrender.com/api/contests/scrape');
    return await response.json();
}

// /users
export async function editUser(id, data) {
    const response = await fetch(`https://contestcalendarscraper.onrender.com/api/users/edit/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return await response.json();
}

export async function getAllUsers() {
    const response = await fetch('https://contestcalendarscraper.onrender.com/api/users/getAll');
    return await response.json();
}

export async function deleteUser(id) {
    const response = await fetch(`https://contestcalendarscraper.onrender.com/api/users/delete/${id}`, {
        method: 'DELETE',
    })
    return await response.json();
}

// /notification
export async function setNotification(id, data) {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token")
    const response = await fetch(`https://contestcalendarscraper.onrender.com/api/notification/set/${id}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    })
    return await response.json();
}

export async function getAllNotifications() {
    const response = await fetch('https://contestcalendarscraper.onrender.com/api/notification/getAll');
    return await response.json();
}

// /auth
export async function signUp(data) {
    const response = await fetch('https://contestcalendarscraper.onrender.com/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return await response.json();
}

export async function signIn(data) {
    const response = await fetch('https://contestcalendarscraper.onrender.com/api/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return await response.json();
}

export async function changePassword(data) {
    const response = await fetch('https://contestcalendarscraper.onrender.com/api/auth/changepassword', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem("token") || sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
    })
    return await response.json();
}