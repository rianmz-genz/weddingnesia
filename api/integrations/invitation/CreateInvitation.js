import makeApiRequest from "@/api/helpers/MakeApi";
import InvitationRoute from "@/api/routes/invitation";
import GetToken from "@/api/utils/GetToken";
import axios from "axios";

const CreateInvitationApi = async ({ data }) => {
  console.log(`url ${InvitationRoute}/store`);
  console.log("token", GetToken());
  try {
    const res = await makeApiRequest({
      baseUrl: `${InvitationRoute}/store`,
      method: "POST",
      data,
      headers: {
        "Content-Type": "application/json",
        Authorization: GetToken(),
        Accept: "application/json",
      },
    });

    if (!res) return false;
    return res[0];
  } catch (error) {
    return console?.log(error);
  }
};

export default CreateInvitationApi;
