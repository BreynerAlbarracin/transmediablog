import Axios from 'axios';

const customAxios = Axios.create({
  baseURL: process.env.baseUrl,
});

export default customAxios;
