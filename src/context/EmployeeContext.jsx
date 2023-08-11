import { useState, useEffect, createContext } from 'react';
import {
  addEmployee,
  deleteEmployee,
  getEmpData,
  updateEmployee,
} from '../api';
import { propTypes } from 'prop-types';

export const EmployeeContext = createContext({
  allEmployee: [],
  editEmployee: [],
  handleUpdate: () => {},
  onDelete: () => {},
  onAdd: () => {},
  onEdite: () => {},
});

EmployeeContextProvider.propTypes = {
  children: propTypes.any,
};

export const EmployeeContextProvider = ({ children }) => {
  const [allEmployee, setAllEmployee] = useState([]);
  const [editEmployee, setEditEmployee] = useState();

  //All Employee
  useEffect(() => {
    async function fetchEmployee() {
      //API Call
      const res = await getEmpData();
      setAllEmployee(res);
    }
    fetchEmployee();
  }, []);

  //Add New Employee
  const onAdd = async (data) => {
    try {
      //API Call
      await addEmployee(data);
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  // Get Data For Edit Employee
  const handleUpdate = (...data) => {
    setEditEmployee(data);
  };

  //Update Employee
  const onEdite = async (id, data) => {
    try {
      //API Call
      await updateEmployee(id, data);
      alert('Employee Has Been Updated');
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  //Delete Employee
  const onDelete = async (id) => {
    try {
      const newData = allEmployee.filter((item) => item.id !== id);
      setAllEmployee(newData);
      //API Call
      await deleteEmployee(id);
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <EmployeeContext.Provider
      value={{
        allEmployee,
        editEmployee,
        handleUpdate,
        onDelete,
        onAdd,
        onEdite,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
