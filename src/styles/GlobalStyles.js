import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  /* color primary */
  --color-primary-1: #01080E;
  --color-primary-2: #011221;
  --color-primary-3: #011627;
  /* color secondary */
  --color-grey-0: #999D9E;
  --color-grey-1: #607B96;
  --color-teal-1: #3C9D93;
  --color-purple-1 : #263B50;
  --color-purple-2 : #5565E8;

  /* color accent */
  --color-accent-1: #C98BDF;
  --color-accent-2: #E99287;
  --color-accent-3: #43D9AD;
  --color-accent-4: #FEA55F;
  /* color lines */
  --color-black: #000;
  --color-lines : #1E2D3D;
  --color-white : #FFFFFF;
  --color-white-2 : #e5e9f0;

  /*color button */
  --color-button-red-1 : #F44336;
  --color-button-red-2 : #f44336b3;
  --color-button-d-1: #FEA55F;
  --color-button-d-2: #FFAC6B;
  --color-button-p-1: #1C2B3A;
  --color-button-p-2: #263B50;
  --color-button-p-3: #ffee10;

  --break-point-mob: 768px;
  --break-point-tab: 1024px;
  --break-point-desk: 1440px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: "Poppins", sans-serif;
}


input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}


/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}
`;

export default GlobalStyles;
