// adapters/ApiAdapter.js
import axios from 'axios';

export async function sendDataRequest() {
  try {
    // const response = await axios.get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=jM9jCnPAiPCwCtSd2V8rbKlCWpVyWGBCpQHIghwb")
    // .then((data) => { return data});
    return `response`
  } catch (error) {
    throw error;
  }
}