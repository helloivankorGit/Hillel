import axios from "axios";
import { API_KEY } from "../helper/const";

export const youtubeAxios = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video',
  params: {
    key: API_KEY,
    maxResults: 10,
    // q: query
  }
});