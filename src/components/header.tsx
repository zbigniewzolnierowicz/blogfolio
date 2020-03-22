import React from "react"
import { css, SerializedStyles } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faNewspaper, faList } from "@fortawesome/free-solid-svg-icons"

import { FAIconLink } from "./FAIconLink"
import { PillLink } from "./Pill"

interface HeaderProps { siteTitle: string, headerStyle?: SerializedStyles }

const Header = ({ siteTitle, headerStyle }: HeaderProps) => (
  <header
    css={[
      css`
        grid-area: header;
        background: var(--color-background-main);
        color: var(--color-text-main);
        height: 10vh;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: fixed;
        top: 0;
        font-size: 18pt;
        @media screen and (max-width: 983px) {
          font-size: 22pt;
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
        grid-template-columns: repeat(auto-fill, minmax(12ch, 1fr));
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
      <FAIconLink to="/" icon={faHome} title="Home" />
      <FAIconLink to="/404" icon={faNewspaper} title="Blog" />
      <PillLink
        to="/portfolio"
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
        Projects
      </PillLink>
    </div>
  </header>
)

export default Header
