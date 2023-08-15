// composables/useData.js
import { sendData, listData } from '@/cores/DataCore';

export function useData() {
  function sendFormData() {
    return sendData();
  }

  function fetchDataList() { 
    return listData();
  }

  return {
    sendFormData,
    fetchDataList,
  };
}
