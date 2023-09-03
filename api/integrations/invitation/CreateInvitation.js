import makeApiRequest from "@/api/helpers/MakeApi";
import InvitationRoute from "@/api/routes/invitation";
import GetToken from "@/api/utils/GetToken";
import axios from "axios";

const CreateInvitationApi = async ({ data }) => {
  console.log(`url ${InvitationRoute}/store`);
  console.table("data", data);
  console.log("token", GetToken());
  try {
    const res = await makeApiRequest({
      baseUrl: `${InvitationRoute}/store`,
      method: "POST",
      data,
      headers: {
        Authorization: GetToken(),
      },
    });
    if (!res) return false;
    return res[0];
  } catch (error) {
    return console?.log(error);
  }
};

export default CreateInvitationApi;
