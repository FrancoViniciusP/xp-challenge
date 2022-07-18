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
  margin: 0;
  text-align: right;
  padding: 0 20px ;
}

input:focus{
    border: 0px;
    border-bottom: 2px solid var(--yellow);
}
`;
