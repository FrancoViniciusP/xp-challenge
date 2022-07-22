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

    const initialQuantity = +screen.getByTestId('asset-quantity').innerHTML;

    const valueInput = screen.getByTestId('valor-financeiro');
    expect(valueInput).toBeInTheDocument();
    userEvent.type(valueInput, '2500');

    const buyButton = screen.getByText(/comprar/i);
    expect(buyButton).toBeInTheDocument();
    userEvent.click(buyButton);

    const confirmButton = screen.getByText(/confirmar/i);
    expect(confirmButton).toBeInTheDocument();
    userEvent.click(confirmButton);

    const finalQuantity = +screen.getByTestId('asset-quantity').innerHTML;
    expect(finalQuantity).toBeGreaterThan(initialQuantity);
  });

  it('is possible to sell an asset', () => {
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

    const initialQuantity = +screen.getByTestId('asset-quantity').innerHTML;

    const quantityInput = screen.getByTestId('quantidade');
    expect(quantityInput).toBeInTheDocument();
    userEvent.type(quantityInput, '10000');

    const sellButton = screen.getByText(/vender/i);
    expect(sellButton).toBeInTheDocument();
    userEvent.click(sellButton);

    const confirmButton = screen.getByText(/confirmar/i);
    expect(confirmButton).toBeInTheDocument();
    userEvent.click(confirmButton);

    const finalQuantity = +screen.getByTestId('asset-quantity').innerHTML;
    expect(finalQuantity).toBeLessThan(initialQuantity);
  });

  it('is not possible to sell more than the client has', () => {
    store.dispatch(setFreeAmount(2500));
    store.dispatch(setAllAssets(mockAssets));
    render(
      <Provider store={store}>
        <Bolsa />
      </Provider>,
    );

    const negotiateButton = screen.getAllByTestId('negotiate-btn');
    expect(negotiateButton).toHaveLength(2);

    userEvent.click(negotiateButton[1]);

    const quantityInput = screen.getByTestId('quantidade');
    expect(quantityInput).toBeInTheDocument();
    userEvent.type(quantityInput, '100');

    const confirmButton = screen.getByText(/vender/i);
    expect(confirmButton).toBeInTheDocument();
    expect(confirmButton).toBeDisabled();
  });
});
