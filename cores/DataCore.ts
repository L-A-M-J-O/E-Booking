// cores/DataCore.js
import { sendDataRequest } from '../adapters/api/BookingService';

export async function sendData() {
  // Realizar lógica adicional si es necesario
}

export async function listData() {
  const response = await sendDataRequest();
  if (response) {
    if (response.data) {
      return response.data.near_earth_objects
    } else {
      return `datos no existen`
    }
  }
}
