import makeApiRequest from "@/api/helpers/MakeApi";
import GuestRoute from "@/api/routes/guest";
import GetDomain from "@/api/utils/GetDomain";
import GetToken from "@/api/utils/GetToken";

async function GuestUpdateAvatarApi({ guestId, data }) {
  const res = makeApiRequest({
    baseUrl: `http://localhost:8000/api/guests/9a19b46d-ac01-47e9-93fd-dfeeba98db3d/avatar`,
    method: "PUT",
    data,
  });
  if (!res) return res;
  return res;
}

export default GuestUpdateAvatarApi;
