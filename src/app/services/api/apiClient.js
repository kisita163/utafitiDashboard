import axios from 'axios';

const BASE_URI = 'http://127.0.0.1:9000/kisita162/utafitiStat/1.0.0/';

const client = axios.create({
 baseURL: BASE_URI,
 json: true
});

class APIClient {
  constructor(accessToken) {
    this.accessToken = accessToken;
  }

  getAreaChart() {
    return this.perform('GET', '/area-chart');
  }

  async perform (method, resource, data) {
    return client({
      method,
      url: resource,
      data,
      headers: {
       'Access-Control-Allow-Origin':'http://localhost:3000'
//        Authorization: `Bearer ${this.accessToken}`,
        
      }
    }).then(resp => {
      return resp.data ? resp.data : [];
    })
  }
}

export default APIClient;
