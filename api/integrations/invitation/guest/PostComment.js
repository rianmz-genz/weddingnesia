const { default: GetDomain } = require("@/api/utils/GetDomain");

async function PostComment(invitationId, guestId, message) {
  const data = { message };
  const url = `${GetDomain()}/invitations/${invitationId}/guests/${guestId}`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export default PostComment;
