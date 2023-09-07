import GetDomain from "@/api/utils/GetDomain";

async function SendEmailInvitation(guestId) {
  const token = "Bearer " + Cookies.get("token");
  const url = `${GetDomain()}/guests/${guestId}/send-email`;
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  }).then((res) => res.json());
}

export default SendEmailInvitation;
