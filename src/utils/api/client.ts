import axios from "axios";
import { BASE_URL } from "utils/constants";

const client = axios.create();

client.defaults.baseURL = BASE_URL;

export default client;
