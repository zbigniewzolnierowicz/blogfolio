import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faNewspaper } from "@fortawesome/free-solid-svg-icons"
import styled from "@emotion/styled"

const StyledLink = styled(Link)`
  margin-right: 2ch;
  text-decoration: none;
  transition: 300ms color ease;
  &,
  &:visited {
    color: var(--color-text-main);
  }
  &:hover {
    color: var(--color-text-secondary);
  }
`

const FAIconLink = ({ to, icon, title }) => (
  <StyledLink role="listitem" to={to} title={title}>
    <FontAwesomeIcon icon={icon} size="2x" />
  </StyledLink>
)

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
        }
        h1 {
          margin: 0 2ch;
        }
      `,
      headerStyle,
    ]}
  >
    <h1>{siteTitle}</h1>
    <div
      role="list"
      css={css`
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: flex-start;
      `}
    >
      <FAIconLink to="/" icon={faHome} title="Home page" />
      <FAIconLink to="/" icon={faNewspaper} title="Blog" />
    </div>
  </header>
)

export default Header
