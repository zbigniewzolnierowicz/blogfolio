import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
export default function Template({ data }) {
  const { frontmatter, html, excerpt } = data.markdownRemark
  const { deployURL, author } = data.site.siteMetadata
  return (
    <Layout>
      <div className="blog-post">
        <SEO description={excerpt} title={frontmatter.title}>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Article",
              headline: frontmatter.title,
              url: deployURL + frontmatter.path,
              datePublished: frontmatter.date,
              author: {
                "@context": "http://schema.org",
                "@type": "Person",
                ...author,
              },
              publisher: {
                "@context": "http://schema.org",
                "@type": "Person",
                ...author,
              },
              image: deployURL + data.file.publicURL,
            })}
          </script>
        </SEO>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    file(name: { eq: "face" }) {
      publicURL
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
      excerpt
    }
    site {
      siteMetadata {
        author {
          familyName
          givenName
          name
        }
        deployURL
      }
    }
  }
`
