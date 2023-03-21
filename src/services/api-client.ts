import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "81fed61de67d493880138fca42149a2d",
  },
});
