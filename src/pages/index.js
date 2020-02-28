import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    file(relativePath: {eq: "me.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 500, maxWidth: 500) {
          srcSet
          sizes
        }
      }
    }
  }
  `)
  const imgData = { ...data.file.childImageSharp.fluid}
  return (
    <Layout>
      <SEO title="Home" />
      <div css={css`
        height: 80vh;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        h2 {
          grid-row: 2 / span 2;
          grid-column: 1 / span 2;
        }
        color: white;
        justify-items: center;
        align-items: center;
      `}>
        <h2>Hello World!</h2>
        <img
          {...imgData}
          loading="lazy"
          css={css`
            grid-row: 2 / span 2;
            grid-column: 3 / span 2;
            object-fit: contain;
            height: fit-content;
            max-height: 100%;
            width: fit-content;
            max-width: 100%;
            border-radius: 25px;
          `}
        />
      </div>
    </Layout>
  )
}

export {
  IndexPage
}
export default IndexPage
