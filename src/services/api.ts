import axios, { AxiosError } from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const onRequestFulfilled = value => {
  const token = process.env.EXPO_PUBLIC_API_TOKEN;
  const request = { ...value };
  request.headers = {
    ...(token && { Authorization: `Bearer ${token}` }),
  };
  return request;
};

const onRequestRejected = (error: AxiosError) => {
  return Promise.reject(error);
};

const onResponseSuccess = response => {
  return response;
};

const onResponseError = (error: AxiosError) => {
  return Promise.reject(error);
};

axiosClient.interceptors.request.use(onRequestFulfilled, onRequestRejected);

axiosClient.interceptors.response.use(onResponseSuccess, onResponseError);

export class Api {
  async get<T>(url, params = {}): Promise<T> {
    const response = await axiosClient.get(url, { params });
    return response.data;
  }

  post(url, data: any) {
    return axiosClient.post(url, data);
  }
}
