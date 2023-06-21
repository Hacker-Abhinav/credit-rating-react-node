import axios from "axios";
import { GET_ACCESS_TOKEN } from "./Base";

export async function HTTP_CLIENT(url:string, data:any, isMulti:boolean = false) {
  return new Promise((resolve, reject) => {
    const accessToken = GET_ACCESS_TOKEN();
    
    const headers:IAxiosHeader = {};
    headers['Content-Type'] = 'application/json';
    
    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`;
    }

    if (isMulti) {
      headers['Content-Type'] = `multipart/form-data`;
    }
    
    const options = {
      method: 'POST',
      url: url,
      headers: headers,
      data: data,
    };
    
    axios.request(options).then(function (response) {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
}

