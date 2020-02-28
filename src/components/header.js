import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/core"

const Header = ({ siteTitle }) => (
  <header
    css={css`
      grid-area: header;
      background: linear-gradient(180deg, rgb(22, 44, 62) 30%, transparent);
      height: 10vh;
      display: flex;
      flex-direction: row;
      align-items: center;
    `}
  >
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
