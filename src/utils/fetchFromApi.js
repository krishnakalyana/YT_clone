import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com/captions";
const options = {
  url: BASE_URL,
  params: {},
  headers: {
    "X-RapidAPI-Key": process.env.React_App_Rapid_API_Key,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
