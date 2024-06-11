import axios from 'axios';
import {USER_SERVICE_URL} from '../config'

export async function getUserById(userId, token) {
  try {
    const response = await axios.get(`${USER_SERVICE_URL}/${userId}`, {headers: {
      Authorization: token
    }});

    const res = response.data.user == undefined ? response.data : response.data.user;

    return res;
  } catch (error) {
    console.error('Error al obtener el usuario por ID:', );
    throw error;
  }
}
