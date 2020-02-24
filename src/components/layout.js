/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Header from "./header"

const LayoutWrapper = styled.div`
width: 100%;
height: 100%;
min-height: 100%;
margin: 0;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: auto auto 1fr;
grid-template-areas:
  "header ."
  "main main"
  "footer footer";
`
const MainWrapper = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutWrapper>
      <Header>
        <Link to="/"><h1>{data.site.siteMetadata.title}</h1></Link>
      </Header>
      <MainWrapper>{children}</MainWrapper>
      <footer css={css`grid-area: footer;`}></footer>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
