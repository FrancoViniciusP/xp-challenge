import React from 'react';
import { useHistory } from 'react-router-dom';
import FooterButtons from '../styles/elements/FooterButtons';

export default function Footer() {
  const history = useHistory();
  return (
    <FooterButtons>
      <button type="button" onClick={() => history.push('/carteira')}>
        Carteira
      </button>
      <button type="button" onClick={() => history.push('/bolsa')}>
        Bolsa
      </button>
      <button type="button" onClick={() => history.push('/conta')}>
        Conta
      </button>
    </FooterButtons>
  );
}
