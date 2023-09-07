import GetDomain from "@/api/utils/GetDomain";
import GetToken from "@/api/utils/GetToken";

async function GuestCheckin(guestCode) {
  const url = `${GetDomain()}/guests/${guestCode}/checkin`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: GetToken(),
    },
  }).then((res) => res.json());
}

export default GuestCheckin;
