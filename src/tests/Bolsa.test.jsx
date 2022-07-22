import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import Bolsa from '../pages/Bolsa';
import { setAllAssets } from '../redux/reducers/assetsInfos';
import { setFreeAmount } from '../redux/reducers/clientInfos';
import store from '../redux/store';
import mockAssets from './mocks/mockAssets';

describe('The Bolsa Page', () => {
  it('contains buttons "Ativos" and "Meus Ativos"', () => {
    render(
      <Provider store={store}>
        <Bolsa />
      </Provider>,
    );

    const assetsButton = screen.getByText('Ativos');
    expect(assetsButton).toBeInTheDocument();

    const myAssetsButton = screen.getByText('Meus Ativos');
    expect(myAssetsButton).toBeInTheDocument();
  });

  it('shows all assets when the button "Ativos" is clicked', () => {
    store.dispatch(setAllAssets(mockAssets));
    render(
      <Provider store={store}>
        <Bolsa />
      </Provider>,
    );

    const assetsButton = screen.getByText('Ativos');
    expect(assetsButton).toBeInTheDocument();

    userEvent.click(assetsButton);

    const allAssets = screen.getAllByRole('row');
    expect(allAssets).toHaveLength(3);
  });

  it('shows only the client assets when the button "Meus Ativos" is clicked', () => {
    store.dispatch(setAllAssets(mockAssets));
    render(
      <Provider store={store}>
        <Bolsa />
      </Provider>,
    );

    const myAssetsButton = screen.getByText('Meus Ativos');
    expect(myAssetsButton).toBeInTheDocument();

    userEvent.click(myAssetsButton);

    const myAssets = screen.getAllByRole('row');
    expect(myAssets).toHaveLength(2);
  });

  it('is possible to buy an asset', () => {
    store.dispatch(setFreeAmount(2500));
    store.dispatch(setAllAssets(mockAssets));
    render(
      <Provider store={store}>
        <Bolsa />
      </Provider>,
    );

    const negotiateButton = screen.getAllByTestId('negotiate-btn');
    expect(negotiateButton).toHaveLength(2);

    userEvent.click(negotiateButton[0]);
  });
});
