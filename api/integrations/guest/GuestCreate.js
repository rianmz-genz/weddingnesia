import GetDomain from "@/api/utils/GetDomain";
import GetToken from "@/api/utils/GetToken";

async function GuestCreate(data) {
  const url = `${GetDomain()}/guests`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": GetToken(),
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export default GuestCreate;
