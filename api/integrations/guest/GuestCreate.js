import makeApiRequest from "@/api/helpers/MakeApi";
import GetDomain from "@/api/utils/GetDomain";
import GetToken from "@/api/utils/GetToken";

async function GuestCreate(data) {
  const url = `${GetDomain()}/guests`;
  const res = await makeApiRequest({
    baseUrl: url,
    data,
    method: "POST",
    authorization: GetToken(),
  });
  console.log(res);
  if (!res || !res?.guestId) return false;
  return res.guestId;
}

export default GuestCreate;
