import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_URL = "http://10.1.1.116:8080/api/competence/";

const fetchComps = async (id) => {
  const token = await AsyncStorage.getItem("@user");
  const result = await axios.get(`${API_URL}${id}/${token}`);
  return result;
};

const fetchAllComps = async () => {
  const token = await AsyncStorage.getItem("@user");
  const result = await axios.get(`${API_URL}${token}`);
  return result.data;
};

const postComp = async (competence) => {
  const token = await AsyncStorage.getItem("@user");
  const result = await axios.post(API_URL + token, competence);
  return result.data;
};

const updateComp = async (id, name, description, link, visible, stars) => {
  const token = await AsyncStorage.getItem("@user");
  const result = await axios.put(`${API_URL}${id}/${token}`, {
    name,
    description,
    link,
    visible,
    stars,
  });
  return result.data;
};

const deleteComp = async (id) => {
  const token = await AsyncStorage.getItem("@user");
  const result = await axios.delete(`${API_URL}${id}/${token}`);
  console.log(id);
  return result.data;
};

const CompService = {
  fetchComps,
  postComp,
  updateComp,
  deleteComp,
  fetchAllComps,
};

export default CompService;
