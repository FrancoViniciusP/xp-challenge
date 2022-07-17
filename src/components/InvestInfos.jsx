import React, { useState } from 'react';
import formatter from '../helpers/functions';
import UserMessage from '../styles/elements/UserMessage';

export default function InvestInfos() {
  const [amount, setAmount] = useState(10000.01);

  useState(() => {
    const convert = formatter.format(amount);
    setAmount(convert);
  }, []);

  return (
    <div>
      <UserMessage>Valor Investido</UserMessage>
      <h1>{`R$ ${amount}`}</h1>
    </div>
  );
}
