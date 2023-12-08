import GetDomain from "@/api/utils/GetDomain";
import GetToken from "@/api/utils/GetToken";

const GetGuestBook = async (invitationId) => {
  const url = `${GetDomain()}/invitations/${invitationId}/guests/messages`;
  return await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: GetToken(),
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log("on error" + error));
};

export default GetGuestBook;
