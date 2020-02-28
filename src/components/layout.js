import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Header from "./header"
import "../global.scss"

const AppWrapper = styled.div`
  display: grid;
  min-height: 100%;
  width: 100%;
  grid-template-rows: 10vh auto 10vh;
  grid-template-columns: auto;
  grid-template-areas:
    "header"
    "main"
    "footer";
  background:
    repeating-linear-gradient(90deg,
      transparent 0,
      transparent 2px,
      rgba(42, 96, 137, .25) 2px,
      rgba(42, 96, 137, .25) 4px
    ),
    repeating-linear-gradient(0deg,
      transparent 0,
      transparent 2px,
      rgba(42, 96, 137, .25) 2px,
      rgba(42, 96, 137, .25) 4px
    ),
    url(${props => props.bgUrl}), rgb(42, 96, 137);
  background-position: center;
  background-size: cover;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      backgroundPath: file(relativePath: {eq: "bg.jpg"}) {
        publicURL
      }
    }
  `)

  return (
    <AppWrapper bgUrl={data.backgroundPath.publicURL}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main css={css`grid-area: main;`}>{children}</main>
      <footer css={css`grid-area: footer;`}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </AppWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
