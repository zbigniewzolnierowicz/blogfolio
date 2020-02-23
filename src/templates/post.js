import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
export default function Template({ data }) {
  const { frontmatter, html, excerpt } = data.markdownRemark
  return (
    <div className="blog-post">
      <SEO description={excerpt} title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
      excerpt
    }
  }
`
