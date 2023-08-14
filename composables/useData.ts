// composables/useData.js
import { sendData, listData } from '@/cores/DataCore';

export function useData() {
  function sendFormData(data:any) {
    return sendData(data);
  }

  function fetchDataList() {
    return listData();
  }

  return {
    sendFormData,
    fetchDataList,
  };
}
