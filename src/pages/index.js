import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"


const pageQuery = graphql`
  query {
    file(name: { eq: "face" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO description="Main page" title="Main page">
      </SEO>
      <article>
        <h2>I code.</h2>
        <Img fixed={data.file.childImageSharp.fixed} />
      </article>
    </Layout>
  )
}

export {
  IndexPage,
  pageQuery
}
export default IndexPage
