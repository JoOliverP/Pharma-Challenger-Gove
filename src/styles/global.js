import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
   --background: #f0f2f5;

   --blue-100: #8ac9d6;
   --blue-200: #46abbf;
   --blue-300: #008ba7;
   --blue-400: #006f85;
   --blue-500: #005364;
   
   --text-title: #363f5f;
   --text-body: #969cb3;
}

html {
      @media (max-width: 1080px) {
         font-size: 93.75%; // 15px
      }
      @media (max-width: 720px) {
         font-size: 87.5%; // 14px
      }
}


* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

body {
   background: var(--background);
   --webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
}

h1,h2,h3,h4,h5,h6, strong {
   font-weight: 600;
}

button {
   cursor: pointer;
}

[disabled] {
   opacity: 0.6;
   cursor: not-allowed;
}
`