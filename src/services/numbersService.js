import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/persons';

export const getAllNumbers = () => {
  return axios.get(baseUrl);
};

export const addNumber = newObject => {
  return axios.post(baseUrl, newObject);
};

export const deleteNumber = id => {
  return axios.delete(baseUrl + '/' + id);
};

export const updateNumber = updatedPerson => {
  return axios.put(baseUrl + '/' + updatedPerson.id, updatedPerson);
};
