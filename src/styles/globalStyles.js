import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    main {
        min-height: 100vh;
        width: 90vw;
        max-width: 700px;
        margin: 0 auto;

        h1 {
            text-align: center;
            font-size: 2.7rem;
            margin-top: 3rem;
            color: #4361ee;
        }
    }

    footer {
        padding: 3rem;
        margin-top: 4rem;

        text-align: center;
        background: #4361ee;

        span {
            font-size: 1.2rem;
            color: #FFF;
        }
    }
`
