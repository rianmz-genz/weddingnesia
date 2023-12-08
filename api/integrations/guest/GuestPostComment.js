import GetDomain from "@/api/utils/GetDomain";
import GetToken from "@/api/utils/GetToken";

async function GuestPostComment(guestId, reqBody) {
  const url = `${GetDomain()}/guests/${guestId}/comment`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: GetToken(),
    },
    body: JSON.stringify(reqBody),
  }).then((res) => res.json());
}

export default GuestPostComment;
