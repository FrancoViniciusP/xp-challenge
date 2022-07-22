import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/navigation/Footer';
import Header from '../components/navigation/Header';
import Logout from '../styles/elements/Logout';

export default function Conta() {
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }
  return (
    <span>
      <Header />
      <Logout>
        <button data-testid="logout" type="button" onClick={handleClick}>
          <img src="logout.svg" alt="voltar a tela inicial" />
        </button>
      </Logout>
      <Footer />
    </span>
  );
}
