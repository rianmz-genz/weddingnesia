import GetDomain from "@/api/utils/GetDomain"

async function GetGuestById(guestId) {
    const url = `${GetDomain()}/guests/${guestId}`
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => res.json())
}

export default GetGuestById