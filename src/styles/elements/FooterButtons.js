import style from 'styled-components';

export default style.footer`
  position: fixed;
  bottom: 0;
  height: 85px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: var(--black-secondary);
  border-top: 1px solid var(--yellow);

  button {
    background-color: var(--black-secondary);
    
    color: white;
    padding: 30px ;
    margin: 0px;
    height: 100%;
    font-size: 20px;
  }

`;
