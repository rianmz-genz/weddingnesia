import GetDomain from "@/api/utils/GetDomain";

async function GuestUpdate(guestId, data) {
  const url = `${GetDomain()}/guests/${guestId}`;
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export default GuestUpdate;
