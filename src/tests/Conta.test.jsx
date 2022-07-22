import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import Conta from '../pages/Conta';

import store from '../redux/store';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('The Conta component', () => {
  it('contains a logout button that redirects to Login', () => {
    render(
      <Provider store={store}>
        <Conta />
      </Provider>,
    );

    const logoutButton = screen.getByTestId('logout');
    expect(logoutButton).toBeInTheDocument();

    userEvent.dblClick(logoutButton);

    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });
});
