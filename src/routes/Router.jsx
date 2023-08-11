import { Routes, Route } from 'react-router-dom';

//layout

import { Index } from '../layout/dashboard';

//pages

import { Home } from '../pages/Home';
import { AddEmployee } from '../pages/AddEmployee';
import { EditEmployee } from '../pages/EditEmployee';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<Index />} />
        <Route path='/' element={<Index />} />
        <Route path='add-employee' element={<AddEmployee />} />
        <Route path='edit-employee' element={<EditEmployee />} />
      </Route>
    </Routes>
  );
};
