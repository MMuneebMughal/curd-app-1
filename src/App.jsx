import { Router } from './routes/router';
import { UserContextProvider } from './context/UserContext';
import { EmployeeContextProvider } from './context/EmployeeContext';

export const App = () => {
  return (
    <div style={{ padding: '1rem 2.5rem' }}>
      <UserContextProvider>
        <EmployeeContextProvider>
          <Router />
        </EmployeeContextProvider>
      </UserContextProvider>
    </div>
  );
};
