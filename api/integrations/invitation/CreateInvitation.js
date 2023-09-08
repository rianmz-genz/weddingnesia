import makeApiRequest from "@/api/helpers/MakeApi";
import InvitationRoute from "@/api/routes/invitation";
import GetToken from "@/api/utils/GetToken";
import axios from "axios";

const CreateInvitationApi = async ({ data }) => {
  try {
    const res = await makeApiRequest({
      baseUrl: `${InvitationRoute}/store`,
      method: "POST",
      data,
      authorization: GetToken(),
    });
    if (!res) return false;
    return res[0];
  } catch (error) {
    return console?.log(error);
  }
};

export default CreateInvitationApi;
