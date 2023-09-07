import GetDomain from "@/api/utils/GetDomain";

async function DeleteGuest(guestId) {
  const token = "Bearer " + Cookies.get("token");
  const url = `${GetDomain()}/guests/${guestId}`;
  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  }).then((res) => res.json());
}

export default DeleteGuest;
