import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Carteira from '../pages/Carteira';
import Login from '../pages/Login';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/carteira" element={<Carteira />} />
    </Routes>
  );
}
