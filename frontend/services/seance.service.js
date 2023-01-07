import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://10.1.1.35:8080/api/coach/seance/";
const API_URL_Player = "http://10.1.1.35:8080/api/joueur/seance/";

const fetchSeance = async () => {
  const token = await AsyncStorage.getItem("@user");
  const result = await axios.get(`${API_URL}${token}`);
  return result.data;
};

export const annulerSeance = async (id, annuler, raisonAnnuler) => {
  const result = await axios.put(`${API_URL}annulerSeance/${id}/${token}`, {
    annuler,
    raisonAnnuler,
  });
  return result.data;
};

export const feedbackSeance = async (id, objectifAtteint, feedback) => {
  const result = await axios.put(`${API_URL}feedbackSeance/${id}/${token}`, {
    objectifAtteint,
    feedback,
  });
  return result.data;
};

const checkDone = async (id) => {
  const token = await AsyncStorage.getItem("@user");
  const result = await axios.get(
    `http://192.168.1.21:8080/api/joueur/checkdone/${id}/${token}`
  );
  return result.data;
};

const fetchMesSeance = async () => {
  const token = await AsyncStorage.getItem("@user");
  const result = await axios.get(`${API_URL_Player}${token}`);
  return result.data;
};

// const postSeance = async (nom, date, periode, lieu, joueur, programme) => {
//   const token = await AsyncStorage.getItem("@user");
//   const result = await axios.post(
//     API_URL + token,
//     nom,
//     date,
//     periode,
//     lieu,
//     joueur,
//     programme
//   );
//   return result.data;
// };

const postSeance = async (seance) => {
  AsyncStorage.getItem("@user").then(async (token) => {
    const result = await axios.post(API_URL + token, seance);
    return result.data;
  });
};

// , lieu, objectif, joueur, programme

const updateSeance = async (id, nom, date, periode) => {
  const token = await AsyncStorage.getItem("@user");
  const result = await axios.put(`${API_URL}${id}/${token}`, {
    id,
    nom,
    date,
    periode,
  });
  return result.data;
};

const seanceDone = async (id) => {
  const token = await AsyncStorage.getItem("@user");
  const result = await axios.put(
    `http://localhost:8080/api/joueur/seancedone/${id}/${token}`
  );
  return result.data;
};

const deleteSeance = async (id) => {
  AsyncStorage.getItem("@user").then(async (token) => {
    const result = await axios.delete(`${API_URL}${id}/${token}`);
    console.log(id);
    return result.data;
  });
};

const seanceService = {
  fetchSeance,
  postSeance,
  updateSeance,
  deleteSeance,
  fetchMesSeance,
  seanceDone,
  checkDone,
};

export default seanceService;
