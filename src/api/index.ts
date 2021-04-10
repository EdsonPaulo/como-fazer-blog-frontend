import axios from "axios";

import { EnvKeys } from "../typescript/enums";

const api = axios.create({
  baseURL: process.env[EnvKeys.API_URL],
});

export * from "./articles";

export default api;
