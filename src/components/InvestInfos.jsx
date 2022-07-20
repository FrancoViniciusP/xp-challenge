import { Skeleton } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import UserMessage from '../styles/elements/UserMessage';

export default function InvestInfos({ props }) {
  const amount = useSelector((state) => state.clientInfos.amount);
  const { hideValues } = props;

  return (
    <div className="infosSpace">
      <UserMessage>Patrimônio Investido</UserMessage>

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
