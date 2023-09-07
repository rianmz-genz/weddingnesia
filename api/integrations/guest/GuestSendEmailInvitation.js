import GetDomain from "@/api/utils/GetDomain";
import GetToken from "@/api/utils/GetToken";

async function GuestSendEmailInvitation(guestId) {
  const url = `${GetDomain()}/guests/${guestId}`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": GetToken(),
    },
  }).then((res) => res.json());
}

export default GuestSendEmailInvitation;
