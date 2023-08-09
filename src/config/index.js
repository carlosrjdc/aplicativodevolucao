import axios from "axios";
import Helpers from "../helpers";

const Axios = axios.create({
  baseURL: "https://backdevolucao.vercel.app/",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

export default Axios;
