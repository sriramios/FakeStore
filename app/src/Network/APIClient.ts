import axios, {AxiosResponse} from 'axios';
import Config from 'react-native-config';

const API_BASE_URL = 'https://fakestoreapi.com';

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: API_BASE_URL, // Use the base URL from the environment
  timeout: 10000, // Timeout after 10 seconds
});

export const get = async <T>(endpoint: string, params?: object): Promise<T> => {
  try {
    const response = await api.get<T>(endpoint, {params});
    console.log('api client', response);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      // Axios error will usually contain the `message` property
      console.error('Error Message:', err.message); // Logs a message like "Network Error"

      // For more information, print other properties like `response`, `request`, etc.
      console.error('Error Response:', err.response); // Logs error response if available
      console.error('Error Request:', err.request); // Logs the request if no response was received
    }
    throw err;
  }
};
