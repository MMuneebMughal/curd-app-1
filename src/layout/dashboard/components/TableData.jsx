import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { tableHeading } from '.';
import { UserContext } from '../../../context/UserContext';
import { EmployeeContext } from '../../../context/EmployeeContext';

export const TableData = () => {
  const { allEmployee, handleUpdate, onDelete } = useContext(EmployeeContext);
  const { checkLogOut } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <div>
      <h1 className='my-5'>Employee Management Software</h1>
      <Button
        variant='primary'
        size='sm'
        style={{ marginRight: '1rem' }}
        onClick={(e) => {
          e.preventDefault();
          navigate('/add-employee');
        }}
      >
        Add Employee
      </Button>
      <Button
        onClick={() => checkLogOut()}
        variant='outline-secondary'
        size='sm'
      >
        Log Out
      </Button>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {tableHeading.map((item, index) => (
              <th key={index}>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allEmployee.map((data, index) => {
            if (allEmployee.includes(data.id)) {
              return null;
            }
            return (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.email}</td>
                <td>$ {data.salary}</td>
                <td>{data.date}</td>
                <td>
                  <Button
                    variant='primary'
                    size='sm'
                    style={{ marginRight: '0.5rem' }}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/edit-employee');
                      handleUpdate(
                        data.id,
                        data.firstname,
                        data.lastname,
                        data.email,
                        data.salary,
                        data.date
                      );
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => onDelete(data.id)}
                    size='sm'
                    variant='danger'
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
