import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export const pageQuery = graphql`
  query {
    tags: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export const TagPage = ({ data }) => {
  return (
    <Layout>
      <ul>
        {data.tags.group.map(tag => (
          <li>
            <Link to={`/tags/${tag.fieldValue}`}>{tag.fieldValue}</Link>:{" "}
            {tag.totalCount}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default TagPage
