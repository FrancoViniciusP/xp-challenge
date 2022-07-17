import style from 'styled-components';

export default style.div`
display: flex;
justify-content: space-evenly;
margin: 40px 0;
background: none;



button {
    padding: 12px 0;
    font-size: 18px;
    width: 140px;
    letter-spacing: 0px;
}

.primary {
    background-color: var(--yellow);
}

.secondary {
    background-color: var(--white);
}
`;
