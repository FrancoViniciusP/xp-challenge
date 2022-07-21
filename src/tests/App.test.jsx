import { render, screen } from '@testing-library/react';
import React from 'react';
import Login from '../pages/Login';

it('render login page', () => {
  render(
    <Login />,
  );
  const linkElement = screen.getByLabelText('Email');
  expect(linkElement).toBeInTheDocument();
});
