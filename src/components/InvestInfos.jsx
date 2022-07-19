import { Skeleton } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import formatter from '../helpers/functions';
import UserMessage from '../styles/elements/UserMessage';

export default function InvestInfos({ props }) {
  const [amount, setAmount] = useState(10000.01);
  const { hideValues } = props;
  useState(() => {
    const convert = formatter.format(amount);
    setAmount(convert);
  }, []);

  return (
    <div className="infosSpace">
      <UserMessage>Patrimônio</UserMessage>
      {hideValues ? (

        <Skeleton
          animation="wave"
          sx={{ bgcolor: 'grey.900', margin: 'auto' }}
          width={200}
          height={36}
          variant="rectangular"
          className="vender"
        />
      ) : <h1>{`R$ ${amount}`}</h1>}

    </div>
  );
}

InvestInfos.propTypes = {
  props: {
    hideValues: PropTypes.bool,
  },
}.isRequired;
