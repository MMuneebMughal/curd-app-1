import axios from 'axios';
import { API_EMPLOYEE, API_AUTH } from '../config/env';

//--------------------EMPLOYEE-----------------//
/*
 Get All Employee
*/
export const getEmpData = async () => {
  const res = await axios.get(API_EMPLOYEE);
  return res.data;
};

/*
Add Employee
*/
export const addEmployee = async (formData) => {
  await axios.post(`${API_EMPLOYEE}`, formData);
};

/*
Delete Employee
*/
export const deleteEmployee = async (id) => {
  await axios.delete(`${API_EMPLOYEE}/${id}`);
};

/*
Update Employee
*/
export const updateEmployee = async (id, data) => {
  await axios.put(`${API_EMPLOYEE}/${id}`, data);
};

//--------------------USERS-----------------//
/*
 Get All User Data
*/
export const getAllUser = async () => {
  const res = await axios.get(API_AUTH);
  return res.data;
};

/*
add user
*/
export const addUser = async (formData) => {
  await axios.post(`${API_AUTH}`, formData);
};
