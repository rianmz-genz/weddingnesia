import makeApiRequest from "@/api/helpers/MakeApi";
import InvitationRoute from "@/api/routes/invitation";
import GetToken from "@/api/utils/GetToken";
import axios from "axios";

const InvitationByUserApi = async () => {
  try {
    const res = await makeApiRequest({
      baseUrl: `${InvitationRoute}/filter-by-user`,
      method: "POST",
      authorization: GetToken(),
    });
    if (!res || !res.invitation) return false;
    return res?.invitation;
  } catch (error) {
    throw error;
  }
};

export default InvitationByUserApi;
