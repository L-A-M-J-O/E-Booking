// adapters/ApiAdapter.js
import axios from 'axios';

export async function sendDataRequest(data:any) {
  try {
    const response = await axios.post('/api/send-data', data);
    return response.data;
  } catch (error) {
    throw error;
  }
}