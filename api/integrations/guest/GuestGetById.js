import makeApiRequest from "@/api/helpers/MakeApi";
import getDomain from "@/api/routes/domain";

async function GuestGetById({ guestId }) {
  const res = await makeApiRequest({
    baseUrl: `${getDomain()}/guests/${guestId}`,
  });
  if (!res) return res;
  return res?.guest;
}

export default GuestGetById;
