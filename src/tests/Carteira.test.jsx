import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import Carteira from '../pages/Carteira';
import store from '../redux/store';

describe('The Carteira Page', () => {
  it('contains the xp logo', () => {
    render(
      <Provider store={store}>
        <Carteira />
      </Provider>,
    );

    const logoXp = screen.getByAltText('logo xp investimentos');
    expect(logoXp).toBeInTheDocument();
  });

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
});
