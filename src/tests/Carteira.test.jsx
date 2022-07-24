import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import Carteira from '../pages/Carteira';
import { setFreeAmount } from '../redux/reducers/clientInfos';
import store from '../redux/store';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('The Carteira Page', () => {
  it('contains the text "patrimonio investido"', () => {
    render(
      <Provider store={store}>
        <Carteira />
      </Provider>,
    );

    const patrimonio = screen.getByText('Patrimônio Investido');
    expect(patrimonio).toBeInTheDocument();
  });

  it('contains the text "saldo disponivel"', () => {
    render(
      <Provider store={store}>
        <Carteira />
      </Provider>,
    );

    const saldo = screen.getByText('Saldo disponível');
    expect(saldo).toBeInTheDocument();
  });

  it('contains a button "Transferir" and it opens a transfer modal', () => {
    render(
      <Provider store={store}>
        <Carteira />
      </Provider>,
    );

    const transferButton = screen.getByText(/transferir/i);
    expect(transferButton).toBeInTheDocument();

    userEvent.click(transferButton);

    const confirmButton = screen.getByText(/confirmar/i);
    expect(confirmButton).toBeInTheDocument();
  });

  it('contains a button "Investir" and it redirects to Bolsa page', () => {
    render(
      <Provider store={store}>
        <Carteira />
      </Provider>,
    );

    const investButton = screen.getByText(/investir/i);
    expect(investButton).toBeInTheDocument();

    userEvent.click(investButton);
    expect(mockHistoryPush).toHaveBeenCalledWith('/bolsa');
  });
});

describe('The transfer modal', () => {
  it('contains a balance value "saldo"', () => {
    store.dispatch(setFreeAmount(0));
    render(
      <Provider store={store}>
        <Carteira />
      </Provider>,
    );

    const hideButton = screen.getByTestId('hide-numbers');
    expect(hideButton).toBeInTheDocument();

    userEvent.click(hideButton);

    const transferButton = screen.getByText(/transferir/i);
    expect(transferButton).toBeInTheDocument();

    userEvent.click(transferButton);

    const balance = screen.getAllByTestId('free-amount');
    expect(balance).toHaveLength(2);

    expect(balance[1].innerHTML).toContain('0');
  });

  it('confirm button is disabled when input a value more than the balance', async () => {
    render(
      <Provider store={store}>
        <Carteira />
      </Provider>,
    );
    const transferButton = screen.getByText(/transferir/i);
    expect(transferButton).toBeInTheDocument();

    userEvent.click(transferButton);

    const transferInput = screen.getByTestId('transfer-input');
    expect(transferInput).toBeInTheDocument();

    userEvent.type(transferInput, '10000');

    const confirmButton = screen.getByText(/confirmar/i);
    expect(confirmButton).toBeDisabled();
  });

  it('balance value changes when deposit', async () => {
    store.dispatch(setFreeAmount(0));
    render(
      <Provider store={store}>
        <Carteira />
      </Provider>,
    );

    const hideButton = screen.getByTestId('hide-numbers');
    expect(hideButton).toBeInTheDocument();

    userEvent.click(hideButton);

    const transferButton = screen.getByText(/transferir/i);
    expect(transferButton).toBeInTheDocument();

    userEvent.click(transferButton);

    const depositButton = screen.getByText(/depósito/i);
    expect(depositButton).toBeInTheDocument();
    userEvent.click(depositButton);

    const transferInput = screen.getByTestId('transfer-input');
    expect(transferInput).toBeInTheDocument();
    userEvent.type(transferInput, '10000');

    const confirmButton = screen.getByText(/confirmar/i);
    expect(confirmButton).toBeEnabled();

    userEvent.click(confirmButton);

    const balance = screen.getAllByTestId('free-amount');
    expect(balance).toHaveLength(2);

    expect(balance[1].innerHTML).toContain('10000');
  });

  it('balance value changes when withdraw', async () => {
    store.dispatch(setFreeAmount(10000));
    render(
      <Provider store={store}>
        <Carteira />
      </Provider>,
    );

    const hideButton = screen.getByTestId('hide-numbers');
    expect(hideButton).toBeInTheDocument();

    userEvent.click(hideButton);

    const transferButton = screen.getByText(/transferir/i);
    expect(transferButton).toBeInTheDocument();

    userEvent.click(transferButton);

    userEvent.click(screen.getByText(/retirada/i));

    const transferInput = screen.getByTestId('transfer-input');
    expect(transferInput).toBeInTheDocument();
    userEvent.type(transferInput, '10000');

    const confirmButton = screen.getByText(/confirmar/i);
    expect(confirmButton).toBeEnabled();

    userEvent.click(confirmButton);

    const balance = screen.getAllByTestId('free-amount');
    expect(balance).toHaveLength(2);

    expect(balance[1].innerHTML).toBe('R$ 0');
  });
});

describe('The header in Carteira Page', () => {
  it('contains the xp logo', () => {
    render(
      <Provider store={store}>
        <Carteira />
      </Provider>,
    );

    const logoXp = screen.getByAltText('logo xp investimentos');
    expect(logoXp).toBeInTheDocument();
  });

  it('contains a greetings message', () => {
    render(
      <Provider store={store}>
        <Carteira />
      </Provider>,
    );

    const greetingsMessage = screen.getByText(/Olá,/i);
    expect(greetingsMessage).toBeInTheDocument();
  });

  it('contains a hide values button and it works', () => {
    render(
      <Provider store={store}>
        <Carteira />
      </Provider>,
    );

    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});
