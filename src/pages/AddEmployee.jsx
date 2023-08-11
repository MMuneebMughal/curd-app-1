import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { EmployeeContext } from '../context/EmployeeContext';

export const AddEmployee = () => {
  const path = useNavigate();
  const { onAdd } = useContext(EmployeeContext);

  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const data = new FormData(event.currentTarget);
      const formData = {
        firstname: data.get('firstname'),
        lastname: data.get('lastname'),
        email: data.get('email'),
        salary: data.get('salary'),
        date: data.get('date'),
      };

      onAdd(formData);
    }
    setValidated(true);
    path('/');
  };

  return (
    <Form
      className='p-5'
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <h1>Add Employee</h1>
      <Row className='mb-3'>
        <Form.Group as={Col} md='6' controlId='validationCustom01'>
          <Form.Label>First name</Form.Label>
          <Form.Control
            name='firstname'
            required
            type='text'
            placeholder='First name'
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
          />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid salary.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='6' controlId='validationCustom04'>
          <Form.Label>Date</Form.Label>
          <Form.Control name='date' type='date' required />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid date.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <div className='d-grid gap-2'>
        <Button variant='primary' size='md' type='submit'>
          Add Employee
        </Button>
      </div>
    </Form>
  );
};
