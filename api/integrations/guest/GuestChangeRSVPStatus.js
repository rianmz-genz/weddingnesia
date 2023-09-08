import GetDomain from "@/api/utils/GetDomain";

async function GuestUpdateRSVPStatus(guestId, rsvpStatus) {
  const data = { rsvpStatus };
  const url = `${GetDomain()}/guests/${guestId}/rsvp-status`;
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export default GuestUpdateRSVPStatus;
