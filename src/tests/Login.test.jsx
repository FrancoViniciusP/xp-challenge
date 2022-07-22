import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Login from '../pages/Login';

const INCORRECT_EMAIL = 'teste_teste.com';
const CORRECT_EMAIL = 'teste@test.com';
const INCORRECT_PASSWORD = '12345';
const CORRECT_PASSWORD = '123456';

describe('The Login Page', () => {
  it('contains the xp logo', () => {
    render(<Login />);

    const logoXp = screen.getByAltText('logo xp investimentos');
    expect(logoXp).toBeInTheDocument();
  });

  it('contains a email input with data-testid "email"', () => {
    render(<Login />);

    const emailInput = screen.getByTestId('email');
    expect(emailInput).toBeInTheDocument();
  });

  it('contains a password input with data-testid "password"', () => {
    render(<Login />);

    const passwordInput = screen.getByTestId('password');
    expect(passwordInput).toBeInTheDocument();
  });

  it('contains a disabled button', () => {
    render(<Login />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});

describe('When the forms', () => {
  it('receives incorrect inputs the button still disabled', () => {
    render(<Login />);

    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');

    userEvent.type(emailInput, INCORRECT_EMAIL);
    userEvent.type(passwordInput, INCORRECT_PASSWORD);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('receives correct inputs the button is enabled', () => {
    render(<Login />);

    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');

    userEvent.type(emailInput, CORRECT_EMAIL);
    userEvent.type(passwordInput, CORRECT_PASSWORD);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });
});

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('The confirm button', () => {
  it('redirects when is clicked', async () => {
    render(<Login />);

    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');

    userEvent.type(emailInput, CORRECT_EMAIL);
    userEvent.type(passwordInput, CORRECT_PASSWORD);

    const button = screen.getByTestId('submit');
    userEvent.click(button);
    expect(mockHistoryPush).toHaveBeenCalledWith('/carteira');
  });
});
