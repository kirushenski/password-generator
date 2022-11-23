import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    /* HSL */
    --hsl-black: 248 15% 11%;
    --hsl-white: 252 11% 91%;
    --hsl-grey: 251 9% 53%;
    --hsl-dark-grey: 248 10% 15%;
    --hsl-green: 127 100% 82%;
    --hsl-red: 0 91% 63%;
    --hsl-orange: 13 95% 66%;
    --hsl-yellow: 42 91% 68%;

    /* Colors */
    --color-black: hsl(var(--hsl-black));
    --color-white: hsl(var(--hsl-white));
    --color-grey: hsl(var(--hsl-grey));
    --color-dark-grey: hsl(var(--hsl-dark-grey));
    --color-green: hsl(var(--hsl-green));
    --color-red: hsl(var(--hsl-red));
    --color-orange: hsl(var(--hsl-orange));
    --color-yellow: hsl(var(--hsl-yellow));

    /* Fonts */
    --font-family: JetBrainsMono, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
    --font-heading-l: 700 32px/43px var(--font-family);
    --font-heading-m: 700 24px/31px var(--font-family);
    --font-body: 700 18px/23px var(--font-family);

    @media (max-width: 479px) {
      --font-heading-l: 700 24px/31px var(--font-family);
      --font-heading-m: 700 18px/23px var(--font-family);
      --font-body: 700 16px/21px var(--font-family);
    }

    /* Grid */
    --spacing-base: 8px;
    --spacing-1: calc(var(--spacing-base) * 1);
    --spacing-2: calc(var(--spacing-base) * 2);
    --spacing-3: calc(var(--spacing-base) * 3);
    --spacing-4: calc(var(--spacing-base) * 4);
    --spacing-5: calc(var(--spacing-base) * 5);
    --spacing-6: calc(var(--spacing-base) * 6);
    --spacing-7: calc(var(--spacing-base) * 7);
    --spacing-8: calc(var(--spacing-base) * 8);
    --spacing-9: calc(var(--spacing-base) * 9);
    --spacing-10: calc(var(--spacing-base) * 10);

    /* Animation */
    --duration: 300ms;

    /* Normalize */
    --body-color: var(--color-grey);
    --body-background: var(--color-black);
    --link-underline-width: 2px;
    --focus-ring-width: 3px;
  }

  @font-face {
    font-weight: 700;
    font-family: JetBrainsMono;
    src: url('fonts/JetBrainsMono-Bold.woff2') format('woff2');
  }

  @font-face {
    font-style: italic;
    font-weight: 700;
    font-family: JetBrainsMono;
    src: url('fonts/JetBrainsMono-BoldItalic.woff2') format('woff2');
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background: none;
    overflow-wrap: break-word;
  }

  html, body, #__next {
    height: 100%;
  }

  #__next {
    isolation: isolate;
    display: grid;
    place-items: center;
    padding: var(--spacing-8) var(--spacing-2);
  }

  html {
    scroll-behavior: smooth;
    @media (prefers-reduced-motion) {
      scroll-behavior: auto;
    }
  }

  body {
    font: var(--font-body);
    color: var(--body-color);
    background: var(--body-background);
    -webkit-font-smoothing: antialiased;
  }

  input, textarea, select {
    border-radius: 0;
    color: var(--body-background);
    background: var(--body-color);
  }

  button {
    cursor: pointer;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  svg {
    fill: currentColor;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    box-shadow: inset 0 calc(-1 * var(--link-underline-width)) 0 0 currentColor;
    padding-bottom: var(--link-underline-width);
  }

  :disabled {
    cursor: not-allowed;
  }

  :focus {
    outline: var(--focus-ring-width) solid var(--color-white);
    outline-offset: var(--focus-ring-width);
  }

  .js-focus-visible :focus:not(.focus-visible), input:focus, textarea:focus {
    outline: none;
  }
`

export default GlobalStyle
