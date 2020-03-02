import React from "react"
import { css } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faNewspaper, faList } from "@fortawesome/free-solid-svg-icons"

import { FAIconLink } from "./FAIconLink"
import { PillLink } from "./Pill"

const Header = ({ siteTitle, headerStyle }) => (
  <header
    css={[
      css`
        grid-area: header;
        background: var(--color-background-main);
        height: 10vh;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: fixed;
        top: 0;
        font-size: 18pt;
        @media screen and (max-width: 983px) {
          font-size: 28pt;
          top: unset;
          bottom: 0;
          .pageTitle {
            display: none;
          }
        }
        .pageTitle {
          margin: 0 2ch;
        }
      `,
      headerStyle,
    ]}
  >
    <h1 className="pageTitle">{siteTitle}</h1>
    <div
      role="list"
      css={css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(14ch, 1fr));
        @media screen and (max-width: 983px) {
          grid-template-columns: repeat(3, 1fr);
        }
        grid-template-rows: auto;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-items: center;
      `}
    >
      <FAIconLink to="/" icon={faHome} title="Home page" />
      <FAIconLink to="/404" icon={faNewspaper} title="Blog" />
      <PillLink
        to="/404"
        role="listitem"
        linkStyle={css`
          grid-column: -2 / span 1;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <FontAwesomeIcon icon={faList} />
        My portfolio
      </PillLink>
    </div>
  </header>
)

export default Header
