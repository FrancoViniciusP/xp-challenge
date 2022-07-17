import { createGlobalStyle } from 'styled-components';

const Reset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    letter-spacing: 1px;
    background-color: var(--black);
    color: white;
  }

  :root {
    --white: #FFFFFF;
    --blue: #479BFF;
    --yellow: #FFC709;
    --red: #FF6969;
    --red-secundary: #FF9E9E;
    --green: #00CB39;
    --green-secundary: #C3FF9E;
    --gray: #D9D9D9;
    --gray-secondary: #E7E7E7;
    --black: #000000;
    --black-secondary: #252525;

  }

  button{
    background-color: var(--yellow);
    border-style: none;
    color: var(--black);
    text-align: center;
  }

  button:disabled{
    background-color: var(--gray);
  }

  button:hover{
    cursor: pointer;
  }

  body {
    background-color: var(--black)
    color: white;
    font-size: 16px;
    text-align: center;
  }

  input {
    border: 0px;
    border-bottom: 1px solid;
    outline: none;
    padding: 5px 10px;
    font-size: 16px;
    margin: 20px 0px;
    background: none;
  }

  img {
    width: 50%;
    margin: 13vh auto 0;
    text-align: center;
  }

  main {
    width: 65%;
    max-width: 400px;
    margin: auto;
    text-align: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;
    font-size: 20px;
  }

  label {
    display: flex;
    flex-direction: column;
  }

  p {
    font-size: 14px;
    display: block;
    margin: 0 auto 10px;
    background: none;
  }

  hr {
    border: 0;
    border-top: 1px solid var(--yellow);
    background-color: var(--yellow);
  }

  h1, div{
    background: none;

  }
`;

export default Reset;
