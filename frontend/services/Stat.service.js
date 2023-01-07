import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_URL = "http://192.168.1.17:8080/api/statistique/";

const fetchStats = async (id) => {
  const token = await AsyncStorage.getItem("@user");
  const result = await axios.get(`${API_URL}${id}/${token}`);
  return result;
};

const fetchAllStats = async () => {
  const token = await AsyncStorage.getItem("@user");
  const result = await axios.get(`${API_URL}${token}`);
  return result.data;
};

const postStat = async (statistique) => {
  const token = await AsyncStorage.getItem("@user");
  const result = await axios.post(API_URL + token, statistique);
  return result.data;
};

const updateStat = async (
  id,
  nom,
  description,
  type,
  unite,
  objectif,
  link,
  visible
) => {
  const token = await AsyncStorage.getItem("@user");
  const result = await axios.put(`${API_URL}${id}/${token}`, {
    nom,
    description,
    type,
    unite,
    objectif,
    link,
    visible,
  });
  return result.data;
};

const deleteStat = async (id) => {
  const token = await AsyncStorage.getItem("@user");
  const result = await axios.delete(`${API_URL}${id}/${token}`);
  console.log(id);
  return result.data;
};

const StatService = {
  fetchStats,
  postStat,
  updateStat,
  deleteStat,
  fetchAllStats,
};

export default StatService;
