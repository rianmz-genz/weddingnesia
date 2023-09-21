import makeApiRequest from "@/api/helpers/MakeApi";
import InvitationRoute from "@/api/routes/invitation";
import GetToken from "@/api/utils/GetToken";
import axios from "axios";

const DeleteInvitationApi = async ({ id }) => {
  const baseURL = `${InvitationRoute}/destroy/${id}`;
  console.log(baseURL);
  try {
    const res = await axios({
      baseURL,
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: GetToken(),
      },
    });
    const response = res.data;
    if (!response.status) return response.status;
    return response.message;
  } catch (error) {
    return error;
  }
};

export default DeleteInvitationApi;
