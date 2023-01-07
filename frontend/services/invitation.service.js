import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://192.168.1.17:8080/api/coach/inviter/joueur/";

const SendInvitation = async (invitation) => {
  AsyncStorage.getItem("@user").then(async (token) => {
    const result = await axios.post(API_URL + token, invitation);
    return result.data;
  });
};

export const InvitationService = {
  SendInvitation,
};
