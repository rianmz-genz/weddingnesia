import GetDomain from "@/api/utils/GetDomain";
import Cookies from "js-cookie";

const GetAllGuests = async (invitationId) => {
    const token = "Bearer " + Cookies.get("token");
    const url = `${GetDomain()}/invitations/${invitationId}/guests`
    console.log(url);
    console.log(token);
    return await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    }).then((response) => {
        return response.json()
    }).catch((error) => console.log("on error" + error))
}

export default GetAllGuests