import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { TableData } from './components/TableData';
import { Login } from '../auth/Login';

export const Index = () => {
  const { isLogIn } = useContext(UserContext);

  return isLogIn === true ? <TableData /> : <Login />;
};
