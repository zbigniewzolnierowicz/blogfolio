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
        @media screen and (max-width: 935px) {
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
    <h1 class="pageTitle">{siteTitle}</h1>
    <div
      role="list"
      css={css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(15ch, 1fr));
        @media screen and (max-width: 935px) {
          grid-template-columns: repeat(auto-fit, minmax(12ch, 1fr));
        }
        grid-template-rows: auto;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-items: center;
      `}
    >
      <FAIconLink to="/" icon={faHome} title="Home page"/>
      <FAIconLink to="/" icon={faNewspaper} title="Blog"/>
      <PillLink
        to="/"
        linkStyle={css`grid-column: -2 / span 1`}
      >
        <FontAwesomeIcon icon={faList}/>My portfolio
      </PillLink>
    </div>
  </header>
)

export default Header
