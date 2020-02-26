/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Header from "./header"
import { Logo } from "./Logo"

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    "header . ."
    "main main main"
    "footer footer footer";
  @media screen and (max-width: 992px) {
    grid-template-areas:
      "header header header"
      "main main main"
      "footer footer footer";
  }
`
const MainWrapper = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  > * {
    flex-grow: 1;
  }
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header>
        <Link to="/">
          <Logo />
        </Link>
      </Header>
      <MainWrapper>{children}</MainWrapper>
      <footer
        css={css`
          grid-area: footer;
        `}
      ></footer>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
