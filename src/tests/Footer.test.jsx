import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import Footer from '../components/navigation/Footer';

import store from '../redux/store';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('The Footer component', () => {
  it('contains tree buttons', () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>,
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);
  });

  it('redirect to carteira when the button is clicked', () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>,
    );

    const carteiraButton = screen.getByText(/carteira/i);
    expect(carteiraButton).toBeInTheDocument();

    userEvent.click(carteiraButton);

    expect(mockHistoryPush).toHaveBeenCalledWith('/carteira');
  });

  it('redirect to bolsa when the button is clicked', () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>,
    );

    const bolsaButton = screen.getByText(/bolsa/i);
    expect(bolsaButton).toBeInTheDocument();

    userEvent.click(bolsaButton);

    expect(mockHistoryPush).toHaveBeenCalledWith('/bolsa');
  });

  it('redirect to conta when the button is clicked', () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>,
    );

    const contaButton = screen.getByText(/conta/i);
    expect(contaButton).toBeInTheDocument();

    userEvent.click(contaButton);

    expect(mockHistoryPush).toHaveBeenCalledWith('/conta');
  });
});
