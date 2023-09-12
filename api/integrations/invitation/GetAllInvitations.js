import GetDomain from "@/api/utils/GetDomain";
import MyLog from "@/utils/MyLog";
import Cookies from "js-cookie";

const GetAllInvitations = async () => {
    const token = "Bearer " + Cookies.get("token");
    const url = `${GetDomain()}/invitation`
    return await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    }).then((response) => {
        return response.json()
    }).catch((error) => MyLog("on error" + error))
}

export default GetAllInvitations