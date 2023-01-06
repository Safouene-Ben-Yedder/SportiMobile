import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://10.1.1.116:8080/api/coach/inviter/joueur/";

const SendInvitation = async (invitation) => {
  AsyncStorage.getItem("@user").then(async (token) => {
    const result = await axios.post(API_URL + token, invitation);
    return result.data;
  });
};

export const InvitationService = {
  SendInvitation,
};
