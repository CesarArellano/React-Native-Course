import axios from "axios";

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '62e55e873b3d4db86782226591ef48ae',
    language: 'es-ES',
    page: '1',
  }
})

export default movieDB;