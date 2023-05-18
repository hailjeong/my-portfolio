import { css } from "@emotion/react";

export const GlobalStyle = css`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul {
    padding-left: 0;
  }

  li {
    list-style-type: none;
  }
`;

export const breakPoints = {
  mobile: "(max-width:575px)",
  tablet: "(min-width:576px) and (max-width:991px)",
};
