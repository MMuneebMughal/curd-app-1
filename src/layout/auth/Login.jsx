import { useContext, useState } from 'react';
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { UserContext } from '../../context/UserContext';

export const Login = () => {
  const [validated, setValidated] = useState(false);
  const { checkLogin } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const data = new FormData(event.currentTarget);
      const formData = {
        email: data.get('email'),
        password: data.get('password'),
      };
      checkLogin(formData);
    }
    setValidated(true);
  };

  return (
    <Form
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: '90vh',
      }}
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Row
        style={{
          width: '400px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Form.Group as={Col} md='12' controlId='validationCustomUsername'>
          <Row className='text-center mb-3'>
            <h1 style={{ fontWeight: '900' }}>Log in</h1>
          </Row>
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id='inputGroupPrepend'>@</InputGroup.Text>
            <Form.Control
              name='email'
              type='email'
              placeholder='Email'
              aria-describedby='inputGroupPrepend'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please enater a valid email address.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md='12' controlId='validationCustom03'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name='password'
            type='password'
            placeholder='Password'
            required
          />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Check label='Remember Me' />
        </Form.Group>
        <Row className='px-3'>
          <Button type='submit'>Log In</Button>
        </Row>
      </Row>
    </Form>
  );
};
