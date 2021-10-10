import axios from "axios";
import { API_KEY } from "../helper/const";

const youtubeAxios = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video',
  params: {
    key: API_KEY,
  }
});

export function searchVideos(query) {
  return youtubeAxios.get("", {
    params: {
      maxResults: 10,
      q: query,
    }
  })
}