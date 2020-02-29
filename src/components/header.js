import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/core"

const Header = ({ siteTitle }) => (
  <header
    css={css`
      grid-area: header;
      background: rgb(0, 11, 25);
      height: 10vh;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      position: fixed;
      top: 0;
      @media screen and (max-width: 935px) {
        top: unset;
        bottom: 0;
      }
    `}
  >
    <Link to="/404">My projects</Link>
    <Link to="/404">My blog</Link>
  </header>
)

export default Header
