import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_URL = "http://192.168.31.34:8080/api/coach/programme/";

const fetchProgrammes = async () => {
  AsyncStorage.getItem("@user").then(async (token) => {
    const result = await axios.get(`${API_URL}${token}`);
    return result;
  });
};

const fetchAllProgrammes = async () => {
  const result = await axios.get(`${API_URL}`);
  return result.data;
};

const postProgramme = async (programme) => {
  AsyncStorage.getItem("@user").then(async (token) => {
    const result = await axios.post(API_URL + token, programme);
    return result.data;
  });
};

const updateProgramme = async (id, title, description, src, video) => {
  AsyncStorage.getItem("@user").then(async (token) => {
    const result = await axios.put(`${API_URL}${id}/${token}`, {
      title,
      description,
      src,
      video,
    });
    return result.data;
  });
};

const deleteProgramme = async (id) => {
  AsyncStorage.getItem("@user").then(async (token) => {
    const result = await axios.delete(`${API_URL}${id}/${token}`);
    console.log(id);
    return result.data;
  });
};

const ProgrammeService = {
  fetchProgrammes,
  postProgramme,
  updateProgramme,
  deleteProgramme,
  fetchAllProgrammes,
};

export default ProgrammeService;
