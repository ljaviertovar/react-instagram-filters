import { createGlobalStyle } from 'styled-components';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat SemiBold';
    src: url(${MontserratSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Bold';
    src: url(${MontserratBold});
    font-style: bold;
  }
  html{
    font-family: 'Montserrat SemiBold';
    color: var(--crema-1);
  }
  *{
    font-family: 'Montserrat SemiBold';
    color: var(--crema-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Montserrat Bold'
  }
`;

export default Typography;
