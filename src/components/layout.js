import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Header from "./header"
import "../global.scss"

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  background: var(--color-background-main);
  background-position: top;
  background-size: cover;
`

const MainWrapper = styled.main`
  grid-area: main;
  > * {
    margin-top: 10vh;
  }
  @media screen and (max-width: 983px) {
    > * {
      margin-top: 0;
    }
  }
`

const Footer = styled.footer`
  width: 100%;
  height: 10vh;
  grid-area: footer;
  @media screen and (max-width: 983px) {
    margin-bottom: 10vh;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      backgroundPath: file(relativePath: { eq: "bg.jpg" }) {
        publicURL
      }
    }
  `)

  return (
    <AppWrapper>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainWrapper>{children}</MainWrapper>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </AppWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
