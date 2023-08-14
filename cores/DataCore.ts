// cores/DataCore.js
import { sendDataRequest } from '../adapters/api/BookingService';

export async function sendData(data: any) {
  // Realizar lógica adicional si es necesario
  const response = await sendDataRequest(data);
  return response;
}

export async function listData() {
  // Lógica para listar datos
  // Puede interactuar con otro adaptador para obtener la lista
}
