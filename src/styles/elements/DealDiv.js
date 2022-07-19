import style from 'styled-components';

export default style.div`
display: flex;
justify-content: center;
margin: 40px auto;
background: none;
width: 300px;

img {
  height: 37px;
}

input {
  width: 180px;
  height: 30px;
  margin: 0 15px;
  text-align: right;
  padding: 0 20px ;
  border-radius: 5px;
}

.buy {
  border: 2px solid var(--blue);
}

.sell {
  border: 2px solid var(--green);
}

input:focus{
    border-bottom: 2px solid var(--yellow);
}
`;
