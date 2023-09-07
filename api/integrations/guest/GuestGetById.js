import GetDomain from "@/api/utils/GetDomain";

async function GuestGetById(guestId) {
  const url = `${GetDomain()}/guests/${guestId}`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
}

export default GuestGetById;
