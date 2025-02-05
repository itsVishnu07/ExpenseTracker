import axios from "axios";
import {
  onRequest,
  onRequestError,
  onResponse,
  onResponseError,
} from "./api-interceptors";

export const BASE_URL = `http://192.168.1.6:5000`;

const defaultOptions = {
  baseURL: `${BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
};

const instance = axios.create(defaultOptions);
instance.interceptors.request.use(
  (config) => onRequest(config),
  (error) => onRequestError(error)
);
instance.interceptors.response.use(
  (response) => onResponse(response),
  (error) => onResponseError(error)
);
export default instance;
