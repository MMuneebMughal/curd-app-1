import { propTypes } from 'prop-types';
import { useState, createContext, useEffect } from 'react';
import { getAllUser } from '../api';

export const UserContext = createContext({
  isLogIn: Boolean,
  checkLogin: () => {},
  checkLogOut: () => {},
});

// UserContextProvider.propTypes = {
//   children: propTypes.any,
// };

export const UserContextProvider = ({ children }) => {
  const [isLogIn, setIsLogIn] = useState(false);

  //User Data
  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
    async function fetchUser() {
      const res = await getAllUser();
      setAllUser(res);
    }
    fetchUser();
  }, []);

  // Log in
  const checkLogin = (data) => {
    const userFound = allUser.find(
      (user) => user.email === data.email && user.password === data.password
    );
    if (userFound) {
      setIsLogIn(true);
    } else {
      alert('Get Out');
    }
  };

  // Log out
  const checkLogOut = () => {
    setIsLogIn(false);
  };

  return (
    <UserContext.Provider
      value={{
        isLogIn,
        checkLogin,
        checkLogOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
