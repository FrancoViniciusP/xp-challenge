import React from 'react';
import { useNavigate } from 'react-router';
import FooterButtons from '../styles/elements/FooterButtons';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <FooterButtons>
      <button type="button" onClick={() => navigate('/carteira')}>
        Carteira
      </button>
      <button type="button" onClick={() => navigate('/bolsa')}>
        Bolsa
      </button>
      <button type="button" onClick={() => navigate('/conta')}>
        Conta
      </button>
    </FooterButtons>
  );
}
