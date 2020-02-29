import React from "react"
import { css } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import { Timeline, Tween, SplitWords } from "react-gsap";

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        description
      }
    }
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
      <div
        css={css`
          padding: 20px;
          height: calc(90vh - 20px);
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr 1fr;
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
        `}
      >
        <article
          css={css`
            text-align: center;
            h2, h3 {
              margin: 0.5rem 0;
            }
            h2 {
              font-size: 4rem;
            }
            h3 {
              font-size: 2rem;
            }
        `}>
          <Timeline
            target={
              <h2>
                Zbigniew Żołnierowicz
              </h2>
            }
          >
            <Tween
              from={{ y: "125px", opacity: 0, scale: 0 }}
              ease="Sin.easeOut"
              duration={0.75}
            />
            <Tween
              to={{ y: 0, opacity: 1, scale: 1 }}
            />
          </Timeline>
          <Timeline 
            target={
              <h3>{data.site.siteMetadata.description}</h3>
            }
            delay={0.75}
          >
            <Tween
              from={{ y: "125px", opacity: 0, scale: 0 }}
              ease="Sin.easeOut"
              duration={0.5}
            />
            <Tween
              to={{ y: 0, opacity: 1, scale: 1 }}
            />
          </Timeline>
        </article>
        <Tween
          from={{ rotationX: '90deg', rotationZ: '90deg' }}
          to={{ rotationX: 0, rotationZ: 0 }}
          duration={1}
          delay={1}
          ease="Sin.easeOut"
        >
          <img
            {...imgData}
            loading="lazy"
            alt="my face"
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
              @media screen and (max-width: 935px) {
                grid-row: 3 / span 2;
                grid-column: 1 / -1;
              }
            `}
          />
        </Tween>
      </div>
    </Layout>
  )
}

export {
  IndexPage
}
export default IndexPage
