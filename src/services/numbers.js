import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

export const getAllNumbers = () => {
  return axios.get(baseUrl);
};

export const addNumber = newObject => {
  return axios.post(baseUrl, newObject);
};
