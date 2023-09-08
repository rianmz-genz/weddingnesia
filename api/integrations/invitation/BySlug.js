import makeApiRequest from "@/api/helpers/MakeApi";
import InvitationRoute from "@/api/routes/invitation";
import GetToken from "@/api/utils/GetToken";
import axios from "axios";

const InvitationBySlugApi = async ({ slug }) => {
  try {
    const res = await makeApiRequest({
      baseUrl: `${InvitationRoute}/${slug}`,
      authorization: GetToken(),
    });
    if (!res || !res.guests) return false;
    return res?.guests;
  } catch (error) {
    throw error;
  }
};

export default InvitationBySlugApi;
