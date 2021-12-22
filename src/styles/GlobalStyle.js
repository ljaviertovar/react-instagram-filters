import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    :root{
        --dark-bg: #2B2F38;
        --deep-dark: #181B22;
        --crema-1: #F1D8C4;
        --blue-1: #4CC9F0;
        --blue-2: #C7FFD8;
        font-size: 1rem;
        font-family: 'Roboto Mono';
    }
    html{
        font-size: 1rem;
        font-family: 'Roboto Mono';
        background-color: var(--dark-bg);
    }
    body {
        width: 100%;
        height: 100vh;
    }
    ul,li{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    img, svg{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    button{
        outline: none
    }
    .filter-item {
        cursor: pointer;
        width: 140px;
        margin: auto;
        padding: 10px;
        border-radius: 6px;
    }
    .filter-item__img {
        width: 120px;
        height: 120px;
        margin: auto;
        img {
            margin-top: 4px;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 6px;
        }
    }
    .filter-item__name {
        p {
            font-size: 1.125rem;
            text-align: center;
            padding: 0.2rem;
            margin-top: 0.4rem
        }
    }
    .filter-item--selected {
        background-color: var(--deep-dark);
    }
`;
export default GlobalStyles;
