import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://192.168.1.29:8080/api/coach/inviter/joueur/";

const invitation = async (email, nom, prenom, telephone) => {
  AsyncStorage.getItem("@user").then(async (token) => {
    const result = await axios.post(API_URL + token, {
      email,
      nom,
      prenom,
      telephone,
    });
    return result.data;
  });
};

export const InvitationService = {
  invitation,
};
