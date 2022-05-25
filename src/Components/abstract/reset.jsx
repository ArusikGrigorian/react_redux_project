import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing : border-box;
  font-family: 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
  color: #1d3248
}

ol, ul{
	list-style: none;
}

a {
  text-decoration: none;

  a:focus, a:hover, a:visited, a:link, a:active {
        text-decoration: none;
        color:inherit;
    }
}

svg {
    height: 20px;
  }
`;

const theme = {
  colors: {
    primary: "#ffffff",
    secondary: "#e2e7e9",
    tertiary: "#e2e4e9",
    quaternary: "#1d3248",
  },
};

export { GlobalStyle, theme };
