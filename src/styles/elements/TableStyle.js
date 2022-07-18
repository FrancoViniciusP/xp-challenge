import style from 'styled-components';

export default style.table`
margin: auto;
width: 100%;
max-width: 500px;
border-collapse:separate; 
border-spacing: 3px  10px;

th {
  font-size: 14px;
  font-weight: thin;
  overflow: hidden;
  font-weight: normal;
}

td {
  background: #424242;
  font-size: 14px;
  width: 80px;
  height: 25px;
}

.ticker {
  background-color: var(--yellow);
  color: black;
}

.positive {
    color: var(--green-secondary);
}

.negative {
    color: var(--red-secondary);
}

.negociate {
  background: none;
}

button {
  background: none;
  padding: 0px;
}

img {
  width: 60px;
  margin: 0px
}


`;
