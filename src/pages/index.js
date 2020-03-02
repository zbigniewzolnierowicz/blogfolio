import React, { useRef } from "react"
import { css } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import Typed from "typed.js"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ScrollIndicator } from "../components/ScrollIndicator"
import { scrollToRef } from "../lib/scrollToRef"
import { TypingText } from "../components/TypingText"

const SingleScreenWrapper = styled.div`
  padding: 20px;
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  color: var(--color-text-main);
  justify-items: center;
  align-items: center;
`

const IndexPage = () => {
  const sect_1 = useRef(null)
  const sect_2 = useRef(null)
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
        }
      }
      file(relativePath: { eq: "face.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <SingleScreenWrapper ref={sect_1}>
        <article
          css={css`
            grid-row: 2 / span 3;
            grid-column: 1 / span 3;
            @media screen and (max-width: 983px) and (orientation: portrait) {
              grid-row: 1 / span 2;
              grid-column: 1 / -1;
            }
            @media screen and (max-width: 641px) and (orientation: portrait) {
              font-size: 9pt !important;
            }
            @media screen and (max-width: 492px) and (orientation: portrait) {
              font-size: 8pt !important;
            }
            text-align: center;
            h2,
            h3 {
              margin: 0.5rem 0;
            }
            h2 {
              font-size: 4em;
            }
            h3 {
              font-size: 2em;
            }
            animation: 1s slideInUpFadeIn ease;
          `}
        >
          <h2>Zbigniew Żołnierowicz</h2>
          <h3>{data.site.siteMetadata.description}</h3>
        </article>
        <img
          src={data.file.publicURL}
          loading="lazy"
          alt="my face"
          css={css`
            margin: 20px;
            max-height: 100%;
            max-width: 100%;
            object-fit: contain;
            grid-row: 1 / 6;
            grid-column: 4 / 6;
            animation: 1s slideInUpFadeIn;
            @media screen and (max-width: 983px) and (orientation: portrait) {
              grid-row: 3 / span 3;
              grid-column: 2 / -2;
            }
            @media screen and (max-width: 465px) and (orientation: portrait) {
              grid-row: 3 / span 3;
              grid-column: 1 / -1;
            }
          `}
        />
        <ScrollIndicator
          svgStyle={css`
            grid-row: -1 / -1;
            grid-column: 3 / 3;
          `}
          onClick={() => scrollToRef(sect_2)}
        ></ScrollIndicator>
      </SingleScreenWrapper>
      <SingleScreenWrapper
        ref={sect_2}
        css={css`
          height: 100vh;
        `}
      >
        <article css={css`
          align-self: flex-start;
          text-align: left;
        `}>
          <h3>
            <TypingText
              strings={[
                "Who am I?",
                "[root@localhost ~]$ whois",
                "DESCRIBE me;"
              ]}
            />
          </h3>
        </article>
      </SingleScreenWrapper>
    </Layout>
  )
}

export { IndexPage }
export default IndexPage
