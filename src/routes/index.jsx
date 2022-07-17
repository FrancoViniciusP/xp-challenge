import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Bolsa from '../pages/Bolsa';
import Carteira from '../pages/Carteira';
import Conta from '../pages/Conta';
import Login from '../pages/Login';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/carteira" element={<Carteira />} />
      <Route path="/bolsa" element={<Bolsa />} />
      <Route path="/conta" element={<Conta />} />
    </Routes>
  );
}
