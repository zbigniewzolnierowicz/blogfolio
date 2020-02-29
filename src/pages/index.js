import React from "react"
import { css } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SingleScreenWrapper = styled.div`
  padding: 20px;
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  article {
    grid-row: 2 / span 2;
    grid-column: 1 / span 2;
  }
  color: white;
  justify-items: center;
  align-items: center;
  @media screen and (max-width: 935px) {
    article {
      grid-row: 1 / span 2;
      grid-column: 1 / -1;
    }
  }
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
        }
      }
      file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 500, maxWidth: 500) {
            srcSet
            sizes
          }
        }
      }
    }
  `)
  const imgData = { ...data.file.childImageSharp.fluid }
  return (
    <Layout>
      <SEO title="Home" />
      <SingleScreenWrapper>
        <article
          css={css`
            text-align: center;
            h2,
            h3 {
              margin: 0.5rem 0;
            }
            h2 {
              font-size: 4rem;
            }
            h3 {
              font-size: 2rem;
            }
          `}
        >
          <h2>Zbigniew Żołnierowicz</h2>
          <h3>{data.site.siteMetadata.description}</h3>
        </article>
        <img
          {...imgData}
          loading="lazy"
          alt="my face"
          css={css`
            margin: 20px;
            box-shadow: 20px 20px 60px #143a50, -20px -20px 60px #1a4e6c;
            border-radius: 25px;
            max-height: 100%;
            max-width: 100%;
            object-fit: contain;
            grid-row: 2 / span 3;
            grid-column: 4 / span 2;
            @media screen and (max-width: 935px) {
              grid-row: 3 / span 3;
              grid-column: 2 / -2;
            }
          `}
        />
      </SingleScreenWrapper>
      <SingleScreenWrapper
        css={css`
          height: 100vh;
        `}
      >
        <article>
          <h2>Wow! Me!</h2>
        </article>
      </SingleScreenWrapper>
    </Layout>
  )
}

export { IndexPage }
export default IndexPage
