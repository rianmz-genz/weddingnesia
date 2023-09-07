import GetDomain from "@/api/utils/GetDomain";

async function CreateGuest(data) {
  const token = "Bearer " + Cookies.get("token");
  const url = `${GetDomain()}/guests`;
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export default CreateGuest;
