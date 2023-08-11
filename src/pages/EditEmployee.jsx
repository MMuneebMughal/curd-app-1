import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { EmployeeContext } from '../context/EmployeeContext';

export const EditEmployee = () => {
  const path = useNavigate();
  const { editEmployee, onEdite } = useContext(EmployeeContext);
  const [id, firstName, lastName, email, salary, date] = editEmployee;

  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    const newData = new FormData(event.currentTarget);
    const formData = {
      firstname: newData.get('firstname'),
      lastname: newData.get('lastname'),
      email: newData.get('email'),
      salary: newData.get('salary'),
      date: newData.get('date'),
    };
    onEdite(id, formData);
    path('/');
  };

  return (
    <Form
      className='p-5'
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <h1>Update Employee</h1>
      <Row className='mb-3'>
        <Form.Group as={Col} md='6' controlId='validationCustom01'>
          <Form.Label>First name</Form.Label>
          <Form.Control
            name='firstname'
            required
            type='text'
            placeholder='First name'
            defaultValue={firstName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='6' controlId='validationCustom02'>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            name='lastname'
            required
            type='text'
            placeholder='Last name'
            defaultValue={lastName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='12' controlId='validationCustomUsername'>
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id='inputGroupPrepend'>@</InputGroup.Text>
            <Form.Control
              type='email'
              name='email'
              placeholder='Email'
              aria-describedby='inputGroupPrepend'
              required
              defaultValue={email}
            />
            <Form.Control.Feedback type='invalid'>
              Please choose an email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md='6' controlId='validationCustom03'>
          <Form.Label>Salary $</Form.Label>
          <Form.Control
            name='salary'
            type='number'
            placeholder='Salary $'
            required
            defaultValue={salary}
          />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid salary.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='6' controlId='validationCustom04'>
          <Form.Label>Date</Form.Label>
          <Form.Control name='date' type='date' required defaultValue={date} />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid date.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <div className='d-grid gap-2'>
        <Button variant='primary' size='md' type='submit'>
          Update Employee
        </Button>
      </div>
    </Form>
  );
};
