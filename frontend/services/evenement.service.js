import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://192.168.1.21:8080/api/coach/evenement/";
const API_URL_Player = "http://192.168.1.21:8080/api/joueur/evenement/";

const fetchEvent = async () => {
  const token = await AsyncStorage.getItem("@user");
  const result = await axios.get(`${API_URL}${token}`);
  return result.data;
};

const checkDone = async (id) => {
  const token = await AsyncStorage.getItem("@user");
  const result = await axios.get(
    `http://192.168.1.21:8080/api/joueur/checkdone/${id}/${token}`
  );
  return result.data;
};

const fetchMesEvent = async () => {
  const token = await AsyncStorage.getItem("@user");
  const result = await axios.get(`${API_URL_Player}${token}`);
  return result.data;
};

// const postEvent = async (nom, description, date, publique) => {
//   const token = await AsyncStorage.getItem("@user");
//   const result = await axios.post(
//     API_URL + token,
// 		nom,
// 		description,
// 		date,
// 		publique,
//   );
//   return result.data;
// };

const postEvent = async (event) => {
  AsyncStorage.getItem("@user").then(async (token) => {
    const result = await axios.post(API_URL + token, event);
    return result.data;
  });
};

const updateEvent = async (id, nom, description, date, lieu) => {
  AsyncStorage.getItem("@user").then(async (token) => {
    const result = await axios.put(`${API_URL}${id}/${token}`, {
      id,
      nom,
      description,
      date,
      lieu,
    });
    return result.data;
  });
};

const eventDone = async (id) => {
  const token = await AsyncStorage.getItem("@user");
  const result = await axios.put(
    `http://10.1.1.35:8080/api/joueur/Eventdone/${id}/${token}`
  );
  return result.data;
};

const deleteEvent = async (id) => {
  const token = await AsyncStorage.getItem("@user");
  const result = await axios.delete(`${API_URL}${id}/${token}`);
  return result.data;
};

const eventService = {
  fetchEvent,
  postEvent,
  updateEvent,
  deleteEvent,
  fetchMesEvent,
  eventDone,
  checkDone,
};

export default eventService;
