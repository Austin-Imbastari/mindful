import "../styles/globals.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
}

html,body {
    scroll-behavior: smooth;
    background: #FDFDFD;
}
`;

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}
