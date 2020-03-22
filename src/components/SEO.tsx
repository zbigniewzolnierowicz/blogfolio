/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"


interface SEOProps { description: string, title: string, lang?: string, meta?: Array<any> }
function SEO({ description, lang = `en`, meta = [], title }: SEOProps) {
  const { site, file } = useStaticQuery<{ site: { siteMetadata: { title: string, description: string, author: string, deployURL: string } }, file: { publicURL: string } }>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            deployURL
          }
        }
        file(relativePath: { eq: "face.svg" }) {
          publicURL
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: `${title} | ${site.siteMetadata.title}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: `${title} | ${site.siteMetadata.title}`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `og:image`,
          content: `${site.siteMetadata.deployURL}${file.publicURL}`
        }
      ].concat(meta)}
    />
  )
}

export default SEO
