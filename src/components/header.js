import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/core"

const Header = ({ siteTitle }) => (
  <header
    css={css`
      grid-area: header;
      background: linear-gradient(180deg, rgb(22, 44, 62) 30%, transparent);
      height: 10vh;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      position: fixed;
      top: 0;
    `}
  ></header>
)

export default Header
