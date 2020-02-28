import React from "react"
import { css } from "@emotion/core"

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
        padding: 20px;
        height: calc(90vh - 20px);
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
        @media screen and (max-width: 767px) {
          h2 {
            grid-row: 1 / span 2;
            grid-column: 1 / -1;
          }
        }
      `}>
        <h2>Hello World!</h2>
        
          <img
            {...imgData}
            loading="lazy"
            css={css`
              margin: 20px;
              box-shadow:
                20px 20px 60px #143a50, 
                -20px -20px 60px #1a4e6c;
              border-radius: 25px;
              max-height: 100%;
              max-width: 100%;
              object-fit: contain;
              grid-row: 2 / span 2;
              grid-column: auto / span 2;
              @media screen and (max-width: 767px) {
                grid-row: 3 / span 2;
                grid-column: 1 / -1;
              }
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
